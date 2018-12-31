import moment from "moment";

//Get visible expenses

export default (expenses, { text, filterByCurrency, startDate, endDate }) =>
    expenses.filter(expense => {
        const regex = new RegExp(text, "gi");
        const createdAtMoment = moment(expense.date);
        const startDateMatch = startDate
            ? startDate.isSameOrBefore(createdAtMoment, "day")
            : true;
        const endDateMatch = endDate
            ? endDate.isSameOrAfter(createdAtMoment, "day")
            : true;
        const textMatch =
            expense.merchant.match(regex) ||
            expense.comment.match(regex) ||
            expense.user.first.match(regex) ||
            expense.user.last.match(regex);

        return startDateMatch && endDateMatch && textMatch;
    });

//fix text match function because it;s fucked
