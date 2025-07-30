export interface InsightData {
  totalPosts: number;
  totalWords: number;
  avgWordsPerPost: number;
  topTags: Array<{ tag: string; count: number }>;
  emotionalPosts: number;
  growthPosts: number;
  complexityTrend: 'increasing' | 'decreasing' | 'stable';
  productivityTrend: 'improving' | 'declining' | 'stable';
  knowledgeAreas: Array<{ title: string; postCount: number; trend: 'growing' | 'declining' | 'stable' }>;
  writingStreaks: Array<{ length: number; days: number }>;
  drySpells: Array<{ days: number }>;
}

export interface DynamicInsight {
  type: 'positive' | 'negative' | 'neutral';
  text: string;
  color: string;
}

export function generateDynamicInsights(data: InsightData, pageType: string): {
  insights: DynamicInsight[];
  summary: string;
} {
  const insights: DynamicInsight[] = [];
  
  // Generate insights based on page type and data
  switch (pageType) {
    case 'cadence':
      insights.push(
        {
          type: 'positive',
          text: `Writing in <span class="text-green-500 font-semibold">burst patterns</span> rather than daily output`,
          color: 'text-green-500'
        },
        {
          type: data.productivityTrend === 'improving' ? 'positive' : 'negative',
          text: `Productivity trend is <span class="${data.productivityTrend === 'improving' ? 'text-green-500' : 'text-red-500'} font-semibold">${data.productivityTrend}</span>`,
          color: data.productivityTrend === 'improving' ? 'text-green-500' : 'text-red-500'
        },
        {
          type: 'neutral',
          text: `${data.writingStreaks.length} distinct writing streaks identified`,
          color: 'text-blue-500'
        }
      );
      break;
      
    case 'evolution':
      insights.push(
        {
          type: data.complexityTrend === 'increasing' ? 'positive' : 'negative',
          text: `Writing complexity is <span class="${data.complexityTrend === 'increasing' ? 'text-green-500' : 'text-red-500'} font-semibold">${data.complexityTrend}</span>`,
          color: data.complexityTrend === 'increasing' ? 'text-green-500' : 'text-red-500'
        },
        {
          type: 'positive',
          text: `Average post length: <span class="text-green-500 font-semibold">${data.avgWordsPerPost} words</span>`,
          color: 'text-green-500'
        },
        {
          type: 'neutral',
          text: `${data.topTags.length} primary topic areas`,
          color: 'text-blue-500'
        }
      );
      break;
      
    case 'topics':
      const growingAreas = data.knowledgeAreas.filter(area => area.trend === 'growing').length;
      const decliningAreas = data.knowledgeAreas.filter(area => area.trend === 'declining').length;
      
      insights.push(
        {
          type: growingAreas > decliningAreas ? 'positive' : 'negative',
          text: `${growingAreas} knowledge areas <span class="text-green-500 font-semibold">growing</span> vs ${decliningAreas} <span class="text-red-500 font-semibold">declining</span>`,
          color: growingAreas > decliningAreas ? 'text-green-500' : 'text-red-500'
        },
        {
          type: 'positive',
          text: `Top focus: <span class="text-green-500 font-semibold">${data.topTags[0]?.tag}</span> (${data.topTags[0]?.count} posts)`,
          color: 'text-green-500'
        },
        {
          type: 'neutral',
          text: `${data.topTags.length} distinct topic areas covered`,
          color: 'text-blue-500'
        }
      );
      break;
      
    case 'insights':
      insights.push(
        {
          type: data.emotionalPosts > 0 ? 'positive' : 'neutral',
          text: `${data.emotionalPosts} <span class="text-green-500 font-semibold">emotionally intense</span> posts`,
          color: 'text-green-500'
        },
        {
          type: data.growthPosts > 0 ? 'positive' : 'neutral',
          text: `${data.growthPosts} <span class="text-green-500 font-semibold">growth-focused</span> posts`,
          color: 'text-green-500'
        },
        {
          type: 'neutral',
          text: `Total content: <span class="text-blue-500 font-semibold">${data.totalWords.toLocaleString()} words</span>`,
          color: 'text-blue-500'
        }
      );
      break;
      
    case 'patterns':
      const avgStreakLength = data.writingStreaks.length > 0 
        ? Math.round(data.writingStreaks.reduce((sum, streak) => sum + streak.length, 0) / data.writingStreaks.length)
        : 0;
      
      insights.push(
        {
          type: avgStreakLength > 3 ? 'positive' : 'neutral',
          text: `Average streak length: <span class="${avgStreakLength > 3 ? 'text-green-500' : 'text-blue-500'} font-semibold">${avgStreakLength} posts</span>`,
          color: avgStreakLength > 3 ? 'text-green-500' : 'text-blue-500'
        },
        {
          type: data.drySpells.length > 0 ? 'negative' : 'positive',
          text: `${data.drySpells.length} <span class="text-red-500 font-semibold">dry spells</span> identified`,
          color: 'text-red-500'
        },
        {
          type: 'neutral',
          text: `${data.writingStreaks.length} distinct creative cycles`,
          color: 'text-blue-500'
        }
      );
      break;
      
    case 'meta':
      insights.push(
        {
          type: 'positive',
          text: `Content depth: <span class="text-green-500 font-semibold">${data.avgWordsPerPost} words</span> average`,
          color: 'text-green-500'
        },
        {
          type: 'neutral',
          text: `${data.totalPosts} total posts analyzed`,
          color: 'text-blue-500'
        },
        {
          type: 'positive',
          text: `Top topic: <span class="text-green-500 font-semibold">${data.topTags[0]?.tag}</span>`,
          color: 'text-green-500'
        }
      );
      break;
  }
  
  // Generate summary based on insights
  const positiveCount = insights.filter(i => i.type === 'positive').length;
  const negativeCount = insights.filter(i => i.type === 'negative').length;
  
  let summary = '';
  if (positiveCount > negativeCount) {
    summary = `Overall trends show <span class="text-green-500 font-semibold">positive development</span> in writing patterns and content quality.`;
  } else if (negativeCount > positiveCount) {
    summary = `Some areas show <span class="text-red-500 font-semibold">declining trends</span> that may need attention.`;
  } else {
    summary = `Writing patterns show <span class="text-blue-500 font-semibold">mixed trends</span> with both growth and challenges.`;
  }
  
  return { insights, summary };
} 