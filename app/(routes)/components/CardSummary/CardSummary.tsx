import React from 'react'
import { CardSummaryProps } from './CardSummary.types'
import {CustomIcon} from '@/components/ui/CustomIcon/CustomIcon'
import CustomTooltip from '@/components/CustomTooltip/CustomTooltip'
import { cn } from '@/lib/utils'
import { MoveUpRight, MoveDownRight, TrendingUp } from 'lucide-react'

export default function CardSummary(props: CardSummaryProps) {
  const { icon: Icon, total, title, average, totaltipText } = props
  return (
    <div className='shadow-sm bg-background rouden-lg p-5 py-3 hover:shadow-lg transition-all duration-200'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <CustomIcon icon={Icon}/>
          {title}
        </div>
        <CustomTooltip content={totaltipText}/>
      </div>
      <div className='flex gap-4 mt02 md:mt-4'>
        <p className='text-2xl'>{total}</p>
        <div className={cn('flex items-center gap-1 px-2 text-xs text-white rounded-lg h-[20px] dark:bg-secondary bg-black')}>
          {average}%
            {average < 20 &&
            (<MoveDownRight strokeWidth={2} className='h-4 w-4' />)}
            {average > 20 && average < 70 &&
            (<MoveUpRight strokeWidth={2} className='h-4 w-4' />)}
            {average > 70 && average < 100 &&
            (<TrendingUp strokeWidth={2} className='h-4 w-4' />)}
        </div>
      </div>
    </div>
  )
}
