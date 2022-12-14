import type { PropsWithChildren } from 'react'
import InsightCard from './InsightCard'
import type { ICard } from '../../types/common/card.type'

interface IProps {
  cards: ICard[]
}

const InsightCardset = ({ cards }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div className="overflow-x-auto">
      <div className="flex">
        {cards.map((card: ICard, index) => (
          <div className={index > 0 ? 'ml-4' : ''} key={card.id}>
            <InsightCard>
              <InsightCard.Media>{card.media}</InsightCard.Media>
              <InsightCard.Body>{card.body}</InsightCard.Body>
              <InsightCard.Footer>{card.footer}</InsightCard.Footer>
            </InsightCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InsightCardset
