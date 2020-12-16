import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={ href }>
      <a>
        <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer 
          hover:bg-gray-100 transition">
          <motion.img src={ imgSrc } layoutId={ layoutId } className="w-full h-full"/>
        </div>
      </a>
    </Link>
  )
}

export default Card