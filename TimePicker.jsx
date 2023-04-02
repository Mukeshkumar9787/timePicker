import React from 'react'

const arrayRange = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

const TimePicker = ({ min = 0, max = 23, hourStep = 1, minStep = 5 }) => {
    const hourList = arrayRange(min, max, hourStep);
    const minList = arrayRange(0, 59, minStep)
    return (
        <div style={{ width: "120px", display: 'flex', alignItems: "center", border: "solid"}}>
            <select id="">
                <option value="" hidden>Hour</option>
                {hourList.map(
                    (hour, index) =>
                        <option value={hour}>{hour}</option>
                )}
            </select>
            <select id="">
                <option value="" hidden>Min</option>
                {minList.map(
                    (hour, index) =>
                        <option value={hour}>{hour}</option>
                )}
            </select>
        </div>
    )
}

export default TimePicker