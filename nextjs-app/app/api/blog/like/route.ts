import { NextRequest, NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity.client';

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    // Increment the like count in Sanity
    const result = await writeClient
      .patch(postId)
      .setIfMissing({ likeCount: 0 })
      .inc({ likeCount: 1 })
      .commit();

    return NextResponse.json({
      success: true,
      likeCount: result.likeCount,
    });
  } catch (error) {
    console.error('Error liking post:', error);
    return NextResponse.json(
      { error: 'Failed to like post' },
      { status: 500 }
    );
  }
}
