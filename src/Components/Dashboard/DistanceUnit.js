export default function DistanceUnit(props) {
    return (
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="distance" className="sr-only">
            Distance
          </label>
          <select
            id="distance"
            name="distance"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>{props.unit1}</option>
            <option>{props.unit2}</option>
          </select>
        </div>
    )
  }