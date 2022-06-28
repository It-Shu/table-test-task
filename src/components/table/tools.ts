export const convertingNameToInitials = (name: string, surname: string, patronymic: string): string => {
    const firstLetterOfName = name.charAt(0)
    const firstLetterOfPatronymic = patronymic.charAt(0)
    return `${surname} ${firstLetterOfName}.${firstLetterOfPatronymic}.`
}

export const convertingDateDataToCurrentDate = (createdDate: number) => {
    const currentDate = new Date(createdDate).toLocaleString()
    const cutSeconds = currentDate.slice(0, -3)
    return cutSeconds
}
