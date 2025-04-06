
const SkeletonCartItem = () => {
  return (
    <tr className="w-full m-4 bg-main">
      <td className="!pl-0 p-4 w-24">
        <div className="flex w-24 h-24 p-4 bg-gray-700 rounded-large animate-pulse"></div>
      </td>
      <td className="text-left">
        <div className="flex flex-col gap-y-2">
          <div className="w-32 h-4 bg-gray-700 animate-pulse"></div>
          <div className="w-24 h-4 bg-gray-700 animate-pulse"></div>
        </div>
      </td>
      <td>
        <div className="flex gap-2 items-center">
          <div className="w-6 h-8 bg-gray-700 animate-pulse"></div>
          <div className="w-14 h-10 bg-gray-700 animate-pulse"></div>
        </div>
      </td>
      <td>
        <div className="flex gap-2">
          <div className="w-12 h-6 bg-gray-700 animate-pulse"></div>
        </div>
      </td>
      <td className="!pr-0 text-right">
        <div className="flex gap-2 justify-end">
          <div className="w-12 h-6 bg-gray-700 animate-pulse"></div>
        </div>
      </td>
    </tr>
  )
}

export default SkeletonCartItem
