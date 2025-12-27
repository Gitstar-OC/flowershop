import { NextRequest, NextResponse } from "next/server";
import { getGoogleSheetsClient } from "@/lib/google-sheets";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = "Sheet1";

type Newsletter = {
  email: string;
};

export async function POST(request: NextRequest) {
  try {
    if (!SHEET_ID) {
      console.error("Missing GOOGLE_SHEET_ID");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const sheets = await getGoogleSheetsClient();

    // Check write access
    const settingsResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!K:L`,
    });
    const settingsValue = settingsResponse.data.values?.[0]?.[0];
    if (settingsValue) {
      try {
        const settings = JSON.parse(settingsValue);
        if (settings.writeAccess === false) {
          return NextResponse.json(
            { error: "New matches are currently disabled by admin" },
            { status: 403 }
          );
        }
      } catch (e) {
        // ignore
      }
    }

    const newsletter: Newsletter = {
      email: body.email,
    };

    // Check if email already exists
    const existingResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!L:L`, // Email column
    });
    const existingEmails = existingResponse.data.values?.flat() || [];
    if (existingEmails.includes(body.email)) {
      return NextResponse.json(
        { error: "This email is already subscribed to the newsletter" },
        { status: 409 }
      );
    }

    const values = [[new Date().toISOString(), body.email]];

    const range = `${SHEET_NAME}!K:L`;

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    console.log("Email saved successfully to Google Sheets");
    return NextResponse.json(newsletter);
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
