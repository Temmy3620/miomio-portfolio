'use client'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { TickItem } from 'recharts/types/util/types'

const defaltData = [
  {
    subject: 'HTML/CSS',
    value: 3,
  },
  {
    subject: 'JavaScript',
    value: 2,
  },
  {
    subject: 'jQuery',
    value: 2,
  },
  {
    subject: 'Vue.js/Vue CLI',
    value: 2,
  },
  {
    subject: 'CSS FW',
    value: 2,
  },
  {
    subject: 'WordPress',
    value: 2,
  },
]

interface SkillRadarChartProps {
  title?: string
  data?: Array<{
    subject: string
    value: number
  }>
  radarColor?: string
}

interface CustomTickProps {
  payload: TickItem;
  x: number;
  y: number;
  index: number;
}


export default function SkillRadarChart({ title, data, radarColor }: SkillRadarChartProps) {
  return (
    <div className="w-full max-w-xl mx-auto p-1">
      <h2 className="text-xl font-semibold mb-4 text-center text-zinc-600 dark:text-zinc-300">{title || 'Skill Readar'}</h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data || defaltData}>
            <PolarGrid
              gridType="polygon"
              stroke="#374151"
            />
            <PolarAngleAxis
              dataKey="subject"
              tick={customTick}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 5]}
              tickCount={6}
              stroke="#4B5561"
              tick={{
                fill: '#6B7280', fontSize: 11
              }}
            />
            <Radar
              name="Skills"
              dataKey="value"
              stroke="#ffffff"
              fill={radarColor || "#FCA5A5"}
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const customTick = ({ payload, x, y, index }: CustomTickProps) => {

  const positionOffset = [
    { dx: 0, dy: -5 },   // 上
    { dx: 10, dy: -5 }, // 右上
    { dx: 10, dy: 10 },  // 右下
    { dx: 0, dy: 5 },    // 下
    { dx: -15, dy: 10 }, // 左下
    { dx: -10, dy: -5 } // 左上
  ];

  const { dx, dy } = positionOffset[index % 6];

  return (
    <text
      x={x + dx}
      y={y + dy}
      textAnchor="middle"
      fill="#9CA3AF"
      fontSize={12}
    >
      {payload.value}
    </text>
  );
};
