import { AnnualEventObject } from "./types";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault("Asia/Tokyo")

// @ts-ignore
function _evalDayjs()
{
    return dayjs()
}

function parseEventString(eventString: string): dayjs.Dayjs
{
    return eval("_evalDayjs()." + eventString);
}

export class AnnualEvent
{
    private from: dayjs.Dayjs;
    private to: dayjs.Dayjs;
    private areRangeDatesSameYear: boolean;
    
    constructor(annualEventObject: AnnualEventObject)
    {
        this.from = parseEventString("startOf('day')." + annualEventObject.from);
        this.to = parseEventString("endOf('day')." + annualEventObject.to);
        this.areRangeDatesSameYear = this.from.isBefore(this.to);
    }
    
    isBetween(checkDate: dayjs.Dayjs): boolean
    {
        if (this.areRangeDatesSameYear)
        {   // if between the dates
            return !checkDate.isBefore(this.from) && !checkDate.isAfter(this.to);
        }
        else
        {   // if after the `from` date OR before the `to` date
            return !checkDate.isBefore(this.from) || !checkDate.isAfter(this.to);
        }
    }
    
    isNow(): boolean
    {
        const now = dayjs()
        return this.isBetween(now)
    }
}


export const annualEventObjects: {[eventName: string]: AnnualEventObject} =
{
    spring: {from: "month(2).date(21)", to: "month(4).endOf('month')"}, // starting with cherry blossoms blooming
    summer: {from: "month(5).startOf('month')", to: "month(7).endOf('month')"}, // sun
    autumn: {from: "month(8).startOf('month')", to: "month(10).endOf('month')"}, // orange/yellow/brown colors
    winter: {from: "month(11).startOf('month')", to: "month(2).date(20)"}, // snow
    
    sakura: {from: "month(2).date(21)", to: "month(3).endOf('month')"}, // cherry blossoms
    goldenWeek: {from: "month(3).date(29)", to: "month(4).date(5)"},
    rainy: {from: "month(5).startOf('month')", to: "month(5).endOf('month')"}, // tsuyu / rainy season
    fireflies: {from: "month(6).date(1)", to: "month(6).date(9)"}, // ホタル観賞
    akizakura: {from: "month(8).startOf('month')", to: "month(8).endOf('month')"}, // cosmos flowers
    spooktober: {from: "month(9).date(17)", to: "month(10).date(1)"},
    christmasTime: {
        from: "month(11).date(24).startOf('week').subtract(3, 'week')", // first advent
        to: "month(11).date(30)"},
    newYears: {from: "month(11).date(31)", to: "month(0).date(1)"},
}

export const annualEvents: {[eventName: string]: AnnualEvent} = Object.fromEntries(
    Object.entries(annualEventObjects).map(([eventName, annualEventObject]) => [eventName, new AnnualEvent(annualEventObject)]));

