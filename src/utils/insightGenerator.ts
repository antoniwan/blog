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
  type: 'positive' | 'negative' | 'neutral' | 'warning';
  text: string;
  color: string;
  weight: number; // 1-5 scale for importance
}

export function generateDynamicInsights(data: InsightData, pageType: string): {
  insights: DynamicInsight[];
  summary: string;
} {
  const insights: DynamicInsight[] = [];
  
  // Generate insights based on page type and data
  switch (pageType) {
    case 'cadence':
      // Positive insights
      if (data.writingStreaks.length > 0) {
        const avgStreakLength = Math.round(data.writingStreaks.reduce((sum, streak) => sum + streak.length, 0) / data.writingStreaks.length);
        insights.push({
          type: avgStreakLength > 3 ? 'positive' : 'neutral',
          text: `Average writing streak: <span class="font-semibold">${avgStreakLength} posts</span>`,
          color: avgStreakLength > 3 ? 'text-green-500' : 'text-blue-500',
          weight: 3
        });
      }
      
      // Negative insights
      if (data.drySpells.length > 0) {
        const longestDrySpell = Math.max(...data.drySpells.map(spell => spell.days));
        insights.push({
          type: longestDrySpell > 60 ? 'negative' : 'warning',
          text: `Longest dry spell: <span class="font-semibold">${longestDrySpell} days</span> without posting`,
          color: longestDrySpell > 60 ? 'text-red-500' : 'text-yellow-500',
          weight: 4
        });
      }
      
      // Productivity trend
      insights.push({
        type: data.productivityTrend === 'improving' ? 'positive' : data.productivityTrend === 'declining' ? 'negative' : 'neutral',
        text: `Productivity trend: <span class="font-semibold">${data.productivityTrend}</span>`,
        color: data.productivityTrend === 'improving' ? 'text-green-500' : data.productivityTrend === 'declining' ? 'text-red-500' : 'text-blue-500',
        weight: 4
      });
      
      // Consistency analysis
      const consistencyScore = data.writingStreaks.length / (data.writingStreaks.length + data.drySpells.length);
      insights.push({
        type: consistencyScore > 0.7 ? 'positive' : consistencyScore < 0.3 ? 'negative' : 'warning',
        text: `Writing consistency: <span class="font-semibold">${Math.round(consistencyScore * 100)}%</span> (streaks vs dry spells)`,
        color: consistencyScore > 0.7 ? 'text-green-500' : consistencyScore < 0.3 ? 'text-red-500' : 'text-yellow-500',
        weight: 3
      });
      break;
      
    case 'evolution':
      // Complexity trend
      insights.push({
        type: data.complexityTrend === 'increasing' ? 'positive' : data.complexityTrend === 'decreasing' ? 'negative' : 'neutral',
        text: `Writing complexity is <span class="font-semibold">${data.complexityTrend}</span>`,
        color: data.complexityTrend === 'increasing' ? 'text-green-500' : data.complexityTrend === 'decreasing' ? 'text-red-500' : 'text-blue-500',
        weight: 4
      });
      
      // Content depth
      const depthScore = data.avgWordsPerPost > 800 ? 'excellent' : data.avgWordsPerPost > 500 ? 'good' : data.avgWordsPerPost > 300 ? 'moderate' : 'shallow';
      insights.push({
        type: depthScore === 'excellent' || depthScore === 'good' ? 'positive' : depthScore === 'shallow' ? 'negative' : 'warning',
        text: `Content depth: <span class="font-semibold">${depthScore}</span> (${data.avgWordsPerPost} avg words)`,
        color: depthScore === 'excellent' || depthScore === 'good' ? 'text-green-500' : depthScore === 'shallow' ? 'text-red-500' : 'text-yellow-500',
        weight: 3
      });
      
      // Topic diversity
      insights.push({
        type: data.topTags.length > 10 ? 'positive' : data.topTags.length < 5 ? 'negative' : 'neutral',
        text: `Topic diversity: <span class="font-semibold">${data.topTags.length} distinct areas</span>`,
        color: data.topTags.length > 10 ? 'text-green-500' : data.topTags.length < 5 ? 'text-red-500' : 'text-blue-500',
        weight: 2
      });
      break;
      
    case 'topics':
      const growingAreas = data.knowledgeAreas.filter(area => area.trend === 'growing').length;
      const decliningAreas = data.knowledgeAreas.filter(area => area.trend === 'declining').length;
      const stableAreas = data.knowledgeAreas.filter(area => area.trend === 'stable').length;
      
      // Growth vs decline
      insights.push({
        type: growingAreas > decliningAreas ? 'positive' : decliningAreas > growingAreas ? 'negative' : 'neutral',
        text: `${growingAreas} areas <span class="font-semibold">growing</span> vs ${decliningAreas} <span class="font-semibold">declining</span>`,
        color: growingAreas > decliningAreas ? 'text-green-500' : decliningAreas > growingAreas ? 'text-red-500' : 'text-blue-500',
        weight: 4
      });
      
      // Focus concentration
      const topTagPercentage = data.topTags[0] ? (data.topTags[0].count / data.totalPosts) * 100 : 0;
      insights.push({
        type: topTagPercentage > 30 ? 'warning' : topTagPercentage > 15 ? 'positive' : 'neutral',
        text: `Top topic concentration: <span class="font-semibold">${Math.round(topTagPercentage)}%</span> on "${data.topTags[0]?.tag}"`,
        color: topTagPercentage > 30 ? 'text-yellow-500' : topTagPercentage > 15 ? 'text-green-500' : 'text-blue-500',
        weight: 3
      });
      
      // Topic balance
      const balanceScore = stableAreas / data.knowledgeAreas.length;
      insights.push({
        type: balanceScore > 0.4 ? 'positive' : balanceScore < 0.2 ? 'negative' : 'warning',
        text: `Topic stability: <span class="font-semibold">${Math.round(balanceScore * 100)}%</span> of areas are stable`,
        color: balanceScore > 0.4 ? 'text-green-500' : balanceScore < 0.2 ? 'text-red-500' : 'text-yellow-500',
        weight: 2
      });
      break;
      
    case 'insights':
      // Emotional expression
      const emotionalRatio = data.emotionalPosts / data.totalPosts;
      insights.push({
        type: emotionalRatio > 0.3 ? 'positive' : emotionalRatio < 0.1 ? 'warning' : 'neutral',
        text: `Emotional expression: <span class="font-semibold">${Math.round(emotionalRatio * 100)}%</span> of posts are emotionally intense`,
        color: emotionalRatio > 0.3 ? 'text-green-500' : emotionalRatio < 0.1 ? 'text-yellow-500' : 'text-blue-500',
        weight: 3
      });
      
      // Growth focus
      const growthRatio = data.growthPosts / data.totalPosts;
      insights.push({
        type: growthRatio > 0.4 ? 'positive' : growthRatio < 0.2 ? 'warning' : 'neutral',
        text: `Growth focus: <span class="font-semibold">${Math.round(growthRatio * 100)}%</span> of posts are growth-oriented`,
        color: growthRatio > 0.4 ? 'text-green-500' : growthRatio < 0.2 ? 'text-yellow-500' : 'text-blue-500',
        weight: 4
      });
      
      // Content volume
      const volumeScore = data.totalWords > 100000 ? 'substantial' : data.totalWords > 50000 ? 'moderate' : data.totalWords > 20000 ? 'developing' : 'minimal';
      insights.push({
        type: volumeScore === 'substantial' || volumeScore === 'moderate' ? 'positive' : volumeScore === 'minimal' ? 'negative' : 'neutral',
        text: `Content volume: <span class="font-semibold">${volumeScore}</span> (${data.totalWords.toLocaleString()} words)`,
        color: volumeScore === 'substantial' || volumeScore === 'moderate' ? 'text-green-500' : volumeScore === 'minimal' ? 'text-red-500' : 'text-blue-500',
        weight: 2
      });
      break;
      
    case 'patterns':
      // Streak analysis
      if (data.writingStreaks.length > 0) {
        const avgStreakLength = Math.round(data.writingStreaks.reduce((sum, streak) => sum + streak.length, 0) / data.writingStreaks.length);
        insights.push({
          type: avgStreakLength > 5 ? 'positive' : avgStreakLength < 2 ? 'negative' : 'neutral',
          text: `Average creative burst: <span class="font-semibold">${avgStreakLength} posts</span> per streak`,
          color: avgStreakLength > 5 ? 'text-green-500' : avgStreakLength < 2 ? 'text-red-500' : 'text-blue-500',
          weight: 3
        });
      }
      
      // Dry spell analysis
      if (data.drySpells.length > 0) {
        const avgDrySpell = Math.round(data.drySpells.reduce((sum, spell) => sum + spell.days, 0) / data.drySpells.length);
        insights.push({
          type: avgDrySpell > 45 ? 'negative' : avgDrySpell > 20 ? 'warning' : 'positive',
          text: `Average recovery time: <span class="font-semibold">${avgDrySpell} days</span> between creative bursts`,
          color: avgDrySpell > 45 ? 'text-red-500' : avgDrySpell > 20 ? 'text-yellow-500' : 'text-green-500',
          weight: 4
        });
      }
      
      // Pattern consistency
      const patternConsistency = data.writingStreaks.length / (data.writingStreaks.length + data.drySpells.length);
      insights.push({
        type: patternConsistency > 0.6 ? 'positive' : patternConsistency < 0.3 ? 'negative' : 'warning',
        text: `Pattern consistency: <span class="font-semibold">${Math.round(patternConsistency * 100)}%</span> predictable cycles`,
        color: patternConsistency > 0.6 ? 'text-green-500' : patternConsistency < 0.3 ? 'text-red-500' : 'text-yellow-500',
        weight: 3
      });
      break;
      
    case 'meta':
      // Content depth
      const depthQuality = data.avgWordsPerPost > 600 ? 'deep' : data.avgWordsPerPost > 400 ? 'moderate' : 'shallow';
      insights.push({
        type: depthQuality === 'deep' ? 'positive' : depthQuality === 'shallow' ? 'negative' : 'neutral',
        text: `Content depth quality: <span class="font-semibold">${depthQuality}</span>`,
        color: depthQuality === 'deep' ? 'text-green-500' : depthQuality === 'shallow' ? 'text-red-500' : 'text-blue-500',
        weight: 3
      });
      
      // Topic focus
      const focusDiversity = data.topTags.length > 8 ? 'diverse' : data.topTags.length > 4 ? 'focused' : 'narrow';
      insights.push({
        type: focusDiversity === 'diverse' ? 'positive' : focusDiversity === 'narrow' ? 'warning' : 'neutral',
        text: `Topic focus: <span class="font-semibold">${focusDiversity}</span> (${data.topTags.length} areas)`,
        color: focusDiversity === 'diverse' ? 'text-green-500' : focusDiversity === 'narrow' ? 'text-yellow-500' : 'text-blue-500',
        weight: 2
      });
      
      // Content maturity
      const maturityScore = data.totalPosts > 50 ? 'mature' : data.totalPosts > 25 ? 'developing' : data.totalPosts > 10 ? 'emerging' : 'nascent';
      insights.push({
        type: maturityScore === 'mature' || maturityScore === 'developing' ? 'positive' : maturityScore === 'nascent' ? 'warning' : 'neutral',
        text: `Content maturity: <span class="font-semibold">${maturityScore}</span> (${data.totalPosts} posts)`,
        color: maturityScore === 'mature' || maturityScore === 'developing' ? 'text-green-500' : maturityScore === 'nascent' ? 'text-yellow-500' : 'text-blue-500',
        weight: 3
      });
      break;
  }
  
  // Sort insights by weight (importance) and type priority
  insights.sort((a, b) => {
    // First by weight (descending)
    if (b.weight !== a.weight) return b.weight - a.weight;
    // Then by type priority: negative > warning > positive > neutral
    const typePriority = { negative: 4, warning: 3, positive: 2, neutral: 1 };
    return typePriority[b.type] - typePriority[a.type];
  });
  
  // Generate balanced summary
  const positiveCount = insights.filter(i => i.type === 'positive').length;
  const negativeCount = insights.filter(i => i.type === 'negative').length;
  const warningCount = insights.filter(i => i.type === 'warning').length;
  
  let summary = '';
  if (negativeCount > positiveCount) {
    summary = `Analysis reveals <span class="text-red-500 font-semibold">significant challenges</span> that need attention, with ${negativeCount} concerning trends vs ${positiveCount} positive indicators.`;
  } else if (warningCount > 0 && negativeCount > 0) {
    summary = `Mixed results with <span class="text-green-500 font-semibold">${positiveCount} positive trends</span>, <span class="text-yellow-500 font-semibold">${warningCount} areas of concern</span>, and <span class="text-red-500 font-semibold">${negativeCount} challenges</span> to address.`;
  } else if (positiveCount > negativeCount) {
    summary = `Overall <span class="text-green-500 font-semibold">positive development</span> with ${positiveCount} strong indicators, though ${negativeCount} areas need attention.`;
  } else {
    summary = `Balanced patterns with <span class="text-blue-500 font-semibold">mixed trends</span> - ${positiveCount} positive and ${negativeCount} negative indicators.`;
  }
  
  return { insights, summary };
} 