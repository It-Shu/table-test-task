import {convertingDateDataToCurrentDate, convertingNameToInitials} from "./tools";


describe('Table tools', () => {

    it('should convert data to date', function () {
        const dataDate =  1465977093594
        convertingDateDataToCurrentDate(dataDate)

        expect('15.06.2016, 10:51').toBeTruthy();

    });

    it('should convert name to initials', function () {
        const name = 'Павел'
        const surname = 'Дуров'
        const patronymic = 'Валерьевич'

        convertingNameToInitials(name, surname, patronymic)

        expect('Дуров П.В.').toBeTruthy();
    });

})
