import { google } from "googleapis";

/**
 * Find the Usage of ENV at https://nextjs.org/docs/pages/guides/environment-variables
 * Code Reference : https://medium.com/@kewinf271/next-14-google-sheets-integration-5225f8e9b7c8
 */
export async function getSheetObject() { 
  const glAuth = await google.auth.getClient({
        projectId: process.env.PROJECT_ID,
        credentials: {
            "type": "service_account",
            "project_id": process.env.PROJECT_ID,
            "private_key_id": process.env.PRIVATE_KEY_ID,
            "private_key": process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
            "client_email": process.env.CLIENT_EMAIL,
            "universe_domain": "googleapis.com"
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const glSheets = google.sheets({ version: "v4", auth: glAuth });

    return glSheets;
}