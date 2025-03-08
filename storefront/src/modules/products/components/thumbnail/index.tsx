import Image from "next/image"
import type { FC } from "react"
import clx from "clsx"

type ThumbnailProps = {
  image?: string
  size?: "small" | "medium" | "large" | "full"
  className?: string
}

const Thumbnail: FC<ThumbnailProps> = ({ image, size = "medium", className }) => {
  return (
    <Container size={size} className={className}>
      <ImageOrPlaceholder image={image} />
    </Container>
  )
}

type ContainerProps = {
  size: "small" | "medium" | "large" | "full"
  className?: string
}

const Container: FC<ContainerProps> = ({ size, className, children }) => {
  return (
    <div
      className={clx(
        "relative w-full overflow-hidden p-4  sidebar-bg shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150",
        className,
        {
          "aspect-[1/1]": true, // Always make it square
          "w-[180px]": size === "small",
          "w-[290px]": size === "medium",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        },
      )}
    >
      {children}
    </div>
  )
}

type ImageOrPlaceholderProps = {
  image?: string
}

const ImageOrPlaceholder: FC<ImageOrPlaceholderProps> = ({ image }) => {
  if (image) {
    return (
      <Image
        src={image || "/placeholder.svg"}
        alt="Thumbnail"
        className="absolute inset-0 object-cover object-center"
        draggable={false}
        quality={70}
        sizes="(max-width: 576px) 180px, (max-width: 768px) 290px, (max-width: 992px) 440px, 100vw"
        fill
      />
    )
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ui-bg-default text-ui-fg-muted">No Image</div>
  )
}

export default Thumbnail

