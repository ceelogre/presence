'use client';

import Link from 'next/link';
import './CardList.css';

interface Card {
  title: string;
  description: string;
  href: string;
}

interface CardListProps {
  cards: Card[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Link 
          key={index} 
          href={card.href}
          className="card"
        >
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </Link>
      ))}
    </div>
  );
} 