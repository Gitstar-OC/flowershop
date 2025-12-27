import { NextRequest, NextResponse } from "next/server";
import { getGoogleSheetsClient } from "@/lib/google-sheets";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = "Sheet1";

type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  website: string;
  companySize: string;
  message: string;
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
      range: `${SHEET_NAME}!P1`,
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

    const contact: Contact = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      companyName: body.companyName,
      website: body.website,
      companySize: body.companySize,
      message: body.message,
    };
    const values = [
      [
        new Date().toISOString(),
        body.firstName,
        body.lastName,
        body.email,
        body.companyName,
        body.website,
        body.companySize,
        body.message,
        body.newsletter ? "Yes" : "No",
      ],
    ];

    const range = `${SHEET_NAME}!A:I`;

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    console.log("Contact saved successfully to Google Sheets");
    return NextResponse.json(contact);
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
