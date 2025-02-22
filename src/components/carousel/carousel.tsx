import React, {
  createContext,
  useContext,
  useRef,
  useState,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import cn from "../../utils/cn";

interface CarouselContextProps {
  currentIndex: number;
  slideRef: React.RefObject<HTMLDivElement>;
  translateValue: React.MutableRefObject<number>;
  itemsCount: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  handlePrev: VoidFunction;
  handleNext: VoidFunction;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "Carousel compound components should be used with Carousel"
    );
  }
  return context;
};

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}

interface CarouselCompound extends React.FC<CarouselProps> {
  Slide: React.FC<SlideProps>;
  Item: React.FC<ItemProps>;
  PrevButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;
  NextButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;
}

const Carousel: CarouselCompound = ({ className, children, ...props }) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const translateValue = useRef(60);

  const [currentIndex, setCurrentIndex] = useState(0);

  const childrenArray = React.Children.toArray(children);
  const slideChild = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === Carousel.Slide
  );
  const itemsCount = slideChild
    ? React.Children.count((slideChild as React.ReactElement).props.children)
    : 0;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      if (slideRef.current) {
        if (currentIndex === 1) {
          slideRef.current.style.transform = `translateX(15%)`;
        } else {
          translateValue.current -= 75;
          slideRef.current.style.transform = `translateX(-${translateValue.current}%)`;
        }
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < itemsCount - 1) {
      setCurrentIndex((prev) => prev + 1);
      if (slideRef.current) {
        if (currentIndex === 0) {
          slideRef.current.style.transform = `translateX(-60%)`;
        } else {
          translateValue.current += 75;
          slideRef.current.style.transform = `translateX(-${translateValue.current}%)`;
        }
      }
    }
  };

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        handlePrev,
        handleNext,
        slideRef,
        translateValue,
        itemsCount,
      }}
    >
      <div
        className={cn("relative h-fll w-full overflow-hidden p-1", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

interface SlideProps extends HTMLAttributes<HTMLDivElement> {
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ className, children, ...props }) => {
  const { slideRef } = useCarousel();

  return (
    <div
      ref={slideRef}
      className={cn(
        "flex gap-[5%] h-full transition-transform duration-500 ease-in-out",
        className
      )}
      style={{ transform: `translateX(15%)` }}
      {...props}
    >
      {children}
    </div>
  );
};

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "shrink-0 w-[70%] h-full bg-white border border-solid border-[#eee] shadow-md rounded-lg p-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const PrevButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  const { handlePrev, currentIndex } = useCarousel();

  return (
    <button
      onClick={handlePrev}
      className={cn(
        "absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded shadow",
        className
      )}
      disabled={currentIndex === 0}
      {...props}
    >
      {children || "Prev"}
    </button>
  );
};

const NextButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  const { handleNext, currentIndex, itemsCount } = useCarousel();

  return (
    <button
      onClick={handleNext}
      className={cn(
        "absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded shadow",
        className
      )}
      disabled={currentIndex === itemsCount - 1}
      {...props}
    >
      {children || "Next"}
    </button>
  );
};

Carousel.Slide = Slide;
Carousel.Item = Item;
Carousel.PrevButton = PrevButton;
Carousel.NextButton = NextButton;

export default Carousel;
