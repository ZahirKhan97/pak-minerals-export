import ProductCard from '@/components/Application/Website/ProductCard'
import React from 'react'
import BannerCarousel from '@/components/Application/Website/BannerCarousel'
import { getProducts } from '@/lib/products'

const Home = async () => {
    const products = await getProducts();
    const minerals = products.minerals;
    const gems = products.gems;
    console.log("Minerals:", minerals);
  return (
    <>
      <BannerCarousel />
        <section id="minerals" className="pt-20">
        
            <div className="max-w-7xl mx-auto px-4">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Minerals Collection
                </h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {minerals.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>

        <section id="gems" className="pt-20">
        
            <div className="max-w-7xl mx-auto px-4">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Gems Collection
                </h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    </>
  )
}

export default Home
