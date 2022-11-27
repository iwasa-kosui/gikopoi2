import { AnnualEventObject } from "./types";
import * as dayjs from "dayjs";

function parseEventString(eventString: string): dayjs.Dayjs
{
    return eval("dayjs()." + eventString);
}

export class AnnualEvent
{
    private from: dayjs.Dayjs;
    private to: dayjs.Dayjs;
    private areRangeDatesSameYear: boolean;
    
    constructor(annualEventObject: AnnualEventObject)
    {
        this.from = parseEventString(annualEventObject.from);
        this.to = parseEventString(annualEventObject.to);
        this.areRangeDatesSameYear = this.from.isBefore(this.to);
    }
    
    isBetween(checkDate: dayjs.Dayjs): boolean
    {
        if (this.areRangeDatesSameYear)
        {   // if between the dates
            return !checkDate.isBefore(this.from, "day") && !checkDate.isAfter(this.to, "day");
        }
        else
        {   // if after the `from` date OR before the `to` date
            return !checkDate.isBefore(this.from, "day") || !checkDate.isAfter(this.to, "day");
        }
    }
    
    isNow(): boolean
    {
        const now = dayjs()
        return this.isBetween(now)
    }
}

// annualEvent("winter").isNow()
export function annualEvent(eventName): AnnualEvent
{
    return new AnnualEvent(annualEvents[eventName]);
}


const monthNames: [string] = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december"
]

export const annualEvents: {[eventName: string]: AnnualEventObject} =
{
    spring: {from: "month(3).date(21)", to: "month(5).endOf('month')"}, // starting with cherry blossoms blooming
    summer: {from: "month(6).startOf('month')", to: "month(8).endOf('month')"}, // sun
    autumn: {from: "month(9).startOf('month')", to: "month(11).endOf('month')"}, // orange/yellow/brown leaves
    winter: {from: "month(12).startOf('month')", to: "month(3).date(20)"}, // snow
    
    goldenWeek: {from: "month(4).date(29)", to: "month(5).date(5)"},
    fireflies: {from: "month(7).date(1)", to: "month(7).date(9)"},
    spooktober: {from: "month(10).date(17)", to: "month(11).date(1)"},
    christmasTime: {from: "month(12).date(1)", to: "month(12).date(30)"},
    newYears: {from: "month(12).date(31)", to: "month(1).date(1)"},
}

monthNames.forEach((monthName, monthNumber) => {
	annualEvents[monthName] = {from: "month(" + (monthNumber+1) + ").startOf('month')", to: "month(" + (monthNumber+1) + ").endOf('month')"};
})
