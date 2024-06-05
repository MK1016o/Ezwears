import { Carousel } from "@material-tailwind/react";

const CarouselTransition = () => {
    return (
        <>
            <Carousel transition={{ duration: 1 }} className="rounded-xl" loop={true} autoplay={true} autoplayDelay={4000}>
                <img
                    src="https://dukaan.b-cdn.net/1440x1440/webp/media/5b03fe6a-fe31-498b-99af-b98a264a1d42.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://dukaan.b-cdn.net/1440x1440/webp/media/83e902d0-eb6a-4cab-bb48-28a64f423c9f.jpeg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://dukaan.b-cdn.net/1440x1440/webp/media/695b070e-e491-48e5-974a-dc38dccfff94.png"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://dukaan.b-cdn.net/1440x1440/webp/media/75460faf-a7d1-4023-9044-251bee958e59.png"
                    alt="image 4"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </>
    )
}

export default CarouselTransition
