const getFormattedDate = () => `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().length < 2 ? `0${(new Date().getMonth() + 1)}` : (new Date().getMonth() + 1).toString()}-${new Date().getDate().toString().length < 2 ? `0${new Date().getDate()}` : new Date().getDate().toString()}`

export default getFormattedDate
