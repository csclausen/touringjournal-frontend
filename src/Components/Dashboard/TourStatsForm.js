import EmbeddedLabelInput from "./EmbeddedLabelInput"
import DistanceUnit from "./DistanceUnit"

export default function TourStatsForm() {
    return (
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="m-2 text-lg leading-6 font-medium text-gray-900">Tour Data</h3>
              <p className="m-2 mt-1 text-sm text-gray-500">
                Fill in information about your tour.
              </p>
            </div>
          </div>
        </div>
        <EmbeddedLabelInput 
          htmlFor="distanceinput" label="Distance" placeHolder="2.1" extra={<DistanceUnit unit1="miles" unit2="km"/>}
        />
        <EmbeddedLabelInput 
          htmlFor="vertinput" label="Vertical" placeHolder="2000" extra={<DistanceUnit unit1="feet" unit2="meters"/>} 
        />
        <EmbeddedLabelInput htmlFor="zone" label="Zone" placeHolder="Mill D North"/>
        <EmbeddedLabelInput htmlFor="objective" label="Objective" placeHolder="Mount Raymond" />
  
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    )
  }