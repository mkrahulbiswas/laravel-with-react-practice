import { playWithDateTimeST } from "@/services/traits/CommonTraitService"

export const CommonUseMethod = () => {
    const respOne = playWithDateTimeST({
        type: 'format_date',
        params: {
            formatTo: '12-08-2025',
            formatType: 'MMM-DD-YYYY',
        }
    })
    const respTwo = playWithDateTimeST({
        type: 'data_time_by_timezone',
        params: {
            timeZone: 'America/Los_Angeles',
            formatTo: '12-08-2025 10:30:00',
            formatType: 'MMM-DD-YYYY hh:mm:ss',
        }
    })
    const respThree = playWithDateTimeST({
        type: 'data_time_by_one_timezone_to_another',
        params: {
            timeZoneFrom: 'Asia/Kolkata',
            timeZoneTo: 'America/Los_Angeles',
            formatTo: '22/07/2025 22:26:00',
            formatType: 'MMM-DD-YYYY hh:mm a',
        }
    })
    const respFour = playWithDateTimeST({
        type: 'add_subtract',
        params: {
            operation: 'add',
            by: 'day', // day, month, year, week
            terms: 1,
            dateFrom: '22/07/2025',
            formatType: 'DD-MM-YYYY',
        }
    })
    const respFive = playWithDateTimeST({
        type: 'difference_between_two_date',
        params: {
            dateFrom: '2025-07-01',
            dateTo: '2025-07-02',
            by: 'hours', // days, months, years, weeks, minutes, hours
        }
    })
    const respSix = playWithDateTimeST({
        type: 'is_weekend_checker',
        params: {
            dateFrom: '2025-07-04',
        }
    })
    console.log(respSix);
    return (
        <div className="row">
            <div className="co-12">
            </div>
        </div>
    )
}
