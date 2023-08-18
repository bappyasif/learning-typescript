import Badges from '@/components/Badges'
import ProductCollection from '@/components/Collection'
import CollectionsTwo from '@/components/CollectionsTwo'
import InputPrice from '@/components/InputPrice'
import ProductLists from '@/components/ProductLists'
import ProductSpec from '@/components/ProductSpec'
import RegistrationPage from '@/components/RegistrationPage'
import RelatedProducts from '@/components/RelatedProducts'
import Sponsors from '@/components/Sponsors'
import Subscription from '@/components/Subscription'
import Testimonial from '@/components/Testimonial'
import TickerNotif from '@/components/Ticker'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'

const PageRoute = () => {
  return (
    <div>
        <h1>Making a test Page With Tailwind Components</h1>
        <TickerNotif />
        <RegistrationPage />
        <Badges />
        <InputPrice />
        <CollectionsTwo />
        <RelatedProducts />
        <ProductCollection />
        <ProductLists />
        <ProductSpec />
        <Sponsors />
        <WorkWithUs />
        <Testimonial />
        <Subscription />
    </div>
  )
}

export default PageRoute