import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!token || !username) {
    return NextResponse.json(
      { error: "Missing GITHUB_TOKEN or NEXT_PUBLIC_GITHUB_USERNAME" },
      { status: 500 }
    );
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json({ error: data.errors }, { status: 500 });
    }

    return NextResponse.json(
      data.data.user.contributionsCollection.contributionCalendar
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
