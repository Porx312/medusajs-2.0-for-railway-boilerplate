
import repeat from "@lib/util/repeat"
import SkeletonCartItem from "@modules/skeletons/components/skeleton-cart-item"
import SkeletonCodeForm from "@modules/skeletons/components/skeleton-code-form"
import SkeletonOrderSummary from "@modules/skeletons/components/skeleton-order-summary"

const SkeletonCartPage = () => {
  return (
    <div className="py-12">
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
          <div className="flex flex-col  p-6 gap-y-6">
            <div className=" flex items-start justify-between">
              <div className="flex flex-col gap-y-2">
                <div className="w-60 h-8 bg-gray-700 animate-pulse" />
                <div className="w-48 h-6 bg-gray-700 animate-pulse" />
              </div>
              <div>
                <div className="w-14 h-8 bg-gray-700 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="pb-3 flex items-center">
                <div className="w-20 h-12 bg-gray-700 animate-pulse" />
              </div>
              <table className="border-t-0 bg-main">
                <thead className="bg-main">
                  <tr>
                    <th className="!pl-0">
                      <div className="w-10 h-6 bg-gray-700 animate-pulse" />
                    </th>
                    <th></th>
                    <th>
                      <div className="w-16 h-6 bg-gray-700 animate-pulse" />
                    </th>
                    <th>
                      <div className="w-12 h-6 bg-gray-700 animate-pulse" />
                    </th>
                    <th className="!pr-0">
                      <div className="flex justify-end">
                        <div className="w-12 h-6 bg-gray-700 animate-pulse" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {repeat(4).map((index) => (
                    <tr key={index}>
                      <SkeletonCartItem />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <SkeletonOrderSummary />
            <SkeletonCodeForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage
