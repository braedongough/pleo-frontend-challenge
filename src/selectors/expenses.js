import moment from "moment";

//Get visible expenses

export default (expenses, { text, filterByCurrency, startDate, endDate }) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate
            ? startDate.isSameOrBefore(createdAtMoment, "day")
            : true;
        const endDateMatch = endDate
            ? endDate.isSameOrAfter(createdAtMoment, "day")
            : true;
        const textMatch =
            expense.merchant ||
            expense.comment ||
            expense.user.first ||
            expense.user.last;
        textMatch.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });
};

//fix text match function because it;s fucked
