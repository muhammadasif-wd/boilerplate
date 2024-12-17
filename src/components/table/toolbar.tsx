/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Table } from "@tanstack/react-table";

import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "../ui/button";
import { CalendarRangePicker } from "../ui/calendar-range-picker";
import { Input } from "../ui/input";
import { categories, incomeType } from "./data";
import { FacetedFilter } from "./faceted-filter";
import { ViewOptions } from "./view-options";

interface ToolbarProps<TData> {
  table: Table<TData>;
}

export function Toolbar<TData>({ table }: ToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(new Date().getFullYear(), 0, 1),
    to: new Date(),
  });

  const handleDateSelect = ({ from, to }: { from: Date; to: Date }) => {
    setDateRange({ from, to });
    // Filter table data based on selected date range
    table.getColumn("date")?.setFilterValue([from, to]);
  };

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder="Filter labels..."
          value={(table.getColumn("note")?.getFilterValue() as string) ?? ""}
          onChange={(event: any) => {
            table.getColumn("note")?.setFilterValue(event.target.value);
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("category") && (
          <FacetedFilter
            column={table.getColumn("category")}
            title="Category"
            options={categories}
          />
        )}
        {table.getColumn("type") && (
          <FacetedFilter
            column={table.getColumn("type")}
            title="Type"
            options={incomeType}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
        <CalendarRangePicker
          date={dateRange}
          onDateSelect={handleDateSelect}
          className="w-[250px] h-8"
          variant="outline"
        />
      </div>

      <ViewOptions table={table} />
    </div>
  );
}
