"use client";

import React, { FC, useCallback, useEffect, useState } from "react";

import { numberToVND } from "@/utils/number";

import Button from "../button";

type TBadge = {
  right: number;
  left: number;
};

const getBadgePosition = (minVal: number, maxVal: number, maxPrice: number): TBadge => {
  const right = 100 - (maxVal / maxPrice) * 100;
  const left = (minVal / maxPrice) * 100;
  return { right, left };
};

interface IFilterPriceProps {
  minPrice?: number;
  maxPrice?: number;
  onChange?: (minPrice: number, maxPrice: number) => void;
  value?: {
    minPrice?: number;
    maxPrice?: number;
  };
}

const FilterPrice: FC<IFilterPriceProps> = props => {
  const { minPrice: _minPrice = 10000, maxPrice: _maxPrice = 5000000, onChange, value } = props;

  const [minPrice, setMinPrice] = useState<number>(value?.minPrice ?? _minPrice);
  const [maxPrice, setMaxPrice] = useState<number>(value?.maxPrice ?? _maxPrice);
  const [badgePosition, setBadgePosition] = useState<TBadge>(
    getBadgePosition(minPrice, maxPrice, _maxPrice)
  );

  const handleMinPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (Number(e.currentTarget.value) > maxPrice) {
        setMinPrice(maxPrice - 10);
        return;
      }
      setMinPrice(Number(e.currentTarget.value));
    },
    [maxPrice]
  );

  const handleMaxPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (Number(e.currentTarget.value) < minPrice) {
        setMaxPrice(minPrice + 10);
        return;
      }
      setMaxPrice(Number(e.currentTarget.value));
    },
    [minPrice]
  );

  const handleChange = useCallback(() => {
    onChange?.(minPrice, maxPrice);
  }, [minPrice, maxPrice, onChange]);

  useEffect(() => {
    setBadgePosition(getBadgePosition(minPrice, maxPrice, _maxPrice));
  }, [minPrice, maxPrice, _maxPrice]);

  return (
    <div>
      <div className="relative mt-3 h-[5px] w-full rounded-[5px] bg-[#f1f1f1]">
        <div
          className="absolute right-0 h-full rounded-[5px] bg-gray-700 bg-fixed"
          style={{
            right: `${badgePosition.right}%`,
            left: `${badgePosition.left}%`,
          }}
        ></div>
        <div className="">
          <input
            className="price-range pointer-events-none absolute left-0 z-[1] m-0 h-[5px] w-full appearance-none bg-transparent"
            min={_minPrice}
            max={_maxPrice}
            type="range"
            value={minPrice}
            onInput={handleMinPriceChange}
          />

          <input
            className="price-range pointer-events-none absolute right-0 z-[1] m-0 h-[5px] w-full appearance-none bg-transparent"
            min={_minPrice}
            max={_maxPrice}
            type="range"
            value={maxPrice}
            onInput={handleMaxPriceChange}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button
          className="rounded-md bg-gray-700 px-2 py-1 text-sm text-white"
          onClick={handleChange}
        >
          Lọc
        </Button>
        <p className="text-right text-sm">
          Giá <span className="font-bold">{numberToVND(minPrice)}</span> -{" "}
          <span className="font-bold">{numberToVND(maxPrice)}</span>
        </p>
      </div>
    </div>
  );
};

export default FilterPrice;
