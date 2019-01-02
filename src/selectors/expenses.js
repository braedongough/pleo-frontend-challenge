import moment from "moment";

//Get visible expenses

export default (expenses, { text, filterByCurrency, startDate, endDate }) =>
    expenses.filter(expense => {
        const textRegex = new RegExp(text, "gi");
        const currencyRegex = new RegExp(filterByCurrency, "gi");
        const createdAtMoment = moment(expense.date);

        const startDateMatch = startDate
            ? startDate.isSameOrBefore(createdAtMoment, "day")
            : true;
        const endDateMatch = endDate
            ? endDate.isSameOrAfter(createdAtMoment, "day")
            : true;
        const textMatch =
            expense.merchant.match(textRegex) ||
            expense.comment.match(textRegex) ||
            expense.user.first.match(textRegex) ||
            expense.user.last.match(textRegex);
        const currencyMatch = expense.amount.currency.match(currencyRegex);

        return startDateMatch && endDateMatch && currencyMatch && textMatch;
    });

//fix text match function because it;s fucked
