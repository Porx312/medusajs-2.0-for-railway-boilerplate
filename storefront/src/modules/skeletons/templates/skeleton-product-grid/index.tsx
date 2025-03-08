import repeat from "@lib/util/repeat"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const SkeletonProductGrid = () => {
  return (
    <ul
      className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
      data-testid="products-list-loader"
    >
      {repeat(8).map((index) => (
        <li key={index} className="aspect-square w-full">
          <div className="h-full w-full">
            <SkeletonProductPreview />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SkeletonProductGrid

