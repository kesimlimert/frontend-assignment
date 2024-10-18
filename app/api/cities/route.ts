import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const response = await fetch('https://iztek-frontend-assignment.vercel.app/api/cities.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const cities = await response.json();
    return NextResponse.json(cities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}