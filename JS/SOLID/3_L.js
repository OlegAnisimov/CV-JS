// Liskov substitution principle

/*
* Функции которые используют базовый тип
* должны уметь взаимодействовать с его подтипами
* */

/*
* Данная реализация нарушает
* 
* */

// class Person {
//     access() {
//         console.log('У тебя есть доступ')
//     }
// }
//
// class Frontend extends Person{
//     canCreateFrontend() {}
// }
//
// class Backend extends Person{
//     canCreateBackend() {}
// }
//
// class PersonFromDifferentCompany extends Person{
//    access() {
//        throw new Error('У тебя нет доступа, ты чужой')
//    }
// }
//
// function openSecretDoor(person) {
//     person.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())


// ПРИНЦИП СОБЛЮДЕН

// class Person {
//
// }
//
// class Member extends Person{
//     access() {
//         console.log('У тебя есть доступ')
//     }
// }
// class Guest extends Person{
//     isGuest = true;
// }
//
// class Frontend extends Member{
//     canCreateFrontend() {}
// }
//
// class Backend extends Member{
//     canCreateBackend() {}
// }
//
// class PersonFromDifferentCompany extends Guest{
//     access() {
//         throw new Error('У тебя нет доступа, ты чужой')
//     }
// }
//
// function openSecretDoor(member) {
//     member.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // Error + Error('У тебя нет доступа, ты чужой')


//================================ Второй пример

class Component { // для соблюдения приницпа этот класс должен быть пустым
    // необходимо добавить доп слои абсорации
    render() {
        return `
        <div>Component</div> 
        `
    }
}

class HeaderComponent extends Component {
    onInit() {
    }
}

class FooterComponent extends Component {
    afterInit() {
    }
}

class HOC  extends Component{
    render() {
        throw new Error('render is imposible')
    }

    wrapComponent(component) {
        component.wrapped = true;
        return component;
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new FooterComponent());
renderComponent(new HeaderComponent());
renderComponent(new HOC());
