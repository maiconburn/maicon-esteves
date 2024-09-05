"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./RadarChart.module.scss";

export function RadarChart({ chartTitle, chartSize, chartHeight }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { axis: "Frontend", value: 8 },
      { axis: "Backend", value: 7 },
      { axis: "Marketing", value: 9 },
      { axis: "Project Manager", value: 8 },
      { axis: "Database", value: 6 },
      { axis: "DevOps", value: 6 },
    ];

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = chartSize || 500;
    const height = chartHeight || 500;
    const radius =
      Math.min(
        width - margin.left - margin.right,
        height - margin.top - margin.bottom
      ) / 2;

    const color = d3.scaleOrdinal().range(["#030957"]);

    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr(
        "transform",
        `translate(${(width + margin.left - margin.right) / 2}, ${
          (height + margin.top - margin.bottom) / 2
        })`
      );

    const radialScale = d3.scaleLinear().domain([0, 10]).range([0, radius]);

    const levels = 10;
    for (let i = 0; i <= levels; i++) {
      const r = (radius / levels) * i;
      svg
        .append("circle")
        .attr("r", r)
        .attr("fill", "none")
        .attr("stroke", "#e9e9e9");
    }

    const angleSlice = (Math.PI * 2) / data.length;
    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      svg
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", radialScale(10) * Math.cos(angle))
        .attr("y2", radialScale(10) * Math.sin(angle))
        .attr("stroke", "#e9e9e9");

      svg
        .append("text")
        .attr("x", radialScale(11) * Math.cos(angle))
        .attr("y", radialScale(11) * Math.sin(angle))
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(d.axis)
        .style("fill", "#030957")
        .style("font-size", "12px");
    });

    const line = d3
      .lineRadial()
      .radius((d) => radialScale(d.value))
      .angle((d, i) => i * angleSlice)
      .curve(d3.curveLinearClosed);

    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("fill", "#030957")
      .attr("fill-opacity", 0.7)
      .attr("stroke", "#030957")
      .attr("stroke-width", 2);

    svg
      .selectAll(".radarCircle")
      .data(data)
      .enter()
      .append("circle")
      .attr(
        "cx",
        (d, i) => radialScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2)
      )
      .attr(
        "cy",
        (d, i) => radialScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2)
      )
      .attr("r", 5)
      .attr("fill", "#030957");
  }, [chartSize, chartHeight]);

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>{chartTitle}</h3>
      <svg ref={chartRef}></svg>
    </div>
  );
}

export default RadarChart;
