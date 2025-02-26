import formatDates from '../utility/formatDates'

export default function Component({ title, subtitle, secondary, startDate, endDate, description, width }) {
    return (<div className="p-4 w-full">
        <h3 className="font-medium text-md inline">{title}</h3>{subtitle ? <p className="font-light text-md inline ml-2">{subtitle}</p> : null}
        {secondary ? <h3 className="text-md">{secondary}</h3> : null}
        <p className="font-light text-xs text-gray-500">{formatDates(startDate, endDate)}</p>
        <p className="text-sm">{description}</p>
    </div>)
}