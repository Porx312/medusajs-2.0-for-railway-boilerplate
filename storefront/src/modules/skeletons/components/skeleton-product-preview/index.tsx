import { Container } from "@medusajs/ui"

const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse">
      <Container className="aspect-[9/16] w-full bg-gray-800" />
      <div className="flex justify-between  mt-2">
        <div className="w-2/5 h-6 bg-gray-800"></div>
        <div className="w-1/5 h-6 bg-gray-800"></div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview
