import { NextResponse } from 'next/server';
import getConfig from 'next/config';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
    
    // Use environment variables for GitHub configuration
    const owner = publicRuntimeConfig.GITHUB_REPO_OWNER;
    const repo = publicRuntimeConfig.GITHUB_REPO_NAME;
    const token = serverRuntimeConfig.GITHUB_TOKEN;

    console.log('GitHub Config:', {
      owner,
      repo,
      tokenLength: token?.length,
      hasToken: !!token
    });

    if (!owner || !repo || !token) {
      throw new Error('Missing required GitHub configuration');
    }
    
    // Search commits by default
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': 'IPEConsole'
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GitHub API error details:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`GitHub API error: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error processing GitHub search:', error);
    return NextResponse.json(
      { error: 'Failed to process GitHub search' },
      { status: 500 }
    );
  }
}