import moment from "moment-timezone";

export const playWithDateTimeST = (data: any) => {
    let finalData: any = {}
    if (data.type == 'format_date') {
        let resp = moment(data.params.formatTo, 'YYYY-MM-DD')
            .format(data.params.formatType)
        finalData = {
            resp: resp,
            raw: data
        }
    }
    if (data.type == 'data_time_by_timezone') {
        const formatTo = data.params.formatTo == '' || data.params.formatTo == null || data.params.formatTo == undefined ? moment() : data.params.formatTo
        const timeZone = data.params.timeZone == '' || data.params.timeZone == null || data.params.timeZone == undefined ? moment.tz.guess() : data.params.timeZone
        let resp = moment(formatTo, 'YYYY-MM-DD').tz(timeZone)
            .format(data.params.formatType)
        finalData = {
            resp: resp,
            raw: data
        }
    }
    if (data.type == 'data_time_by_one_timezone_to_another') {
        const formatTo = data.params.formatTo == '' || data.params.formatTo == null || data.params.formatTo == undefined ? moment() : data.params.formatTo
        const timeZoneFrom = data.params.timeZoneFrom == '' || data.params.timeZoneFrom == null || data.params.timeZoneFrom == undefined ? moment.tz.guess() : data.params.timeZoneFrom
        const timeZoneTo = data.params.timeZoneTo == '' || data.params.timeZoneTo == null || data.params.timeZoneTo == undefined ? moment.tz.guess() : data.params.timeZoneTo
        let resp = moment.tz(formatTo, "YYYY-MM-DD HH:mm:ss", timeZoneFrom)
            .tz(timeZoneTo)
            .format(data.params.formatType);
        finalData = {
            resp: resp,
            raw: data
        }
    }
    if (data.type == 'add_subtract') {
        const dateFrom = data.params.dateFrom == '' || data.params.dateFrom == null || data.params.dateFrom == undefined ? moment() : data.params.dateFrom
        let resp = ''
        if (data.params.operation == 'add') {
            resp = moment(dateFrom, 'YYYY-MM-DD').add(data.params.terms, data.params.by).format(data.params.formatType)
        } else {
            resp = moment(dateFrom, 'YYYY-MM-DD').subtract(data.params.terms, data.params.by).format(data.params.formatType)
        }
        finalData = {
            resp: resp,
            raw: data
        }
    }
    if (data.type == 'difference_between_two_date') {
        const dateFrom = data.params.dateFrom == '' || data.params.dateFrom == null || data.params.dateFrom == undefined ? moment() : data.params.dateFrom
        const dateTo = data.params.dateTo == '' || data.params.dateTo == null || data.params.dateTo == undefined ? moment() : data.params.dateTo
        let resp = moment(dateTo)
            .diff(moment(dateFrom), data.params.by)
        finalData = {
            resp: resp,
            raw: data
        }
    }
    if (data.type == 'is_weekend_checker') {
        const dateFrom = data.params.dateFrom == '' || data.params.dateFrom == null || data.params.dateFrom == undefined ? moment() : data.params.dateFrom
        const dayOfWeek = moment(dateFrom, 'YYYY-MM-DD').day(); // 0 = Sunday, 6 = Saturday
        let resp = dayOfWeek === 0 || dayOfWeek === 6;
        finalData = {
            resp: resp,
            raw: data
        }
    }
    return finalData
}
