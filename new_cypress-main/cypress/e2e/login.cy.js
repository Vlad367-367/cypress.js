describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://pokemonbattle.ru/'); // Зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type ('elhoffvlad@yandex.ru'); // Ввели логин
        cy.get('#password').type('E367CAopel'); // Ввели пароль
        cy.get('.auth__button').click(); // Нашли и нажали на кнопку войти
        cy.get('.header__container > .header__id').click(); // Нажал на профиль
        cy.get('[href="/shop"]').click(); // Нажал на смену аватара
        cy.get(':nth-child(7) > .shop__button').click(); // Нажал купить аватар
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type ('5555555555555557'); // ввели карту
        cy.get(':nth-child(1) > .pay_base-input-v2').type ('1224'); // ввел дату
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type ('125'); // ввел cvv
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); // ввел имя
        cy.get('.pay-btn').click(); // Нажал оплатить
        cy.get('#cardnumber').type ('56456'); // Ввел код из смс
        cy.get('.payment__submit-button').click(); // Нажал оплатить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        

 
     })
 })
 
 
 