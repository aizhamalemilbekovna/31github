
#include <iostream>
#include <vector>
#include <algorithm>
#include <fstream>
#include <sstream>
#include <unordered_map>
#include <iomanip>

// Класс для представления абитуриента
class Applicant {
protected:
    std::string fullName;     // Полное имя абитуриента
    int birthYear;            // Год рождения абитуриента
    int school;               // Номер школы, из которой поступил абитуриент
    float averageScore;       // Средний балл абитуриента

public:
    // Конструктор класса
    Applicant(const std::string& name, int year, int sch, float score)
        : fullName(name), birthYear(year), school(sch), averageScore(score) {}

    // Функции для получения значений полей (аксессоры)
    const std::string& getFullName() const {
        return fullName;
    }

    int getBirthYear() const {
        return birthYear;
    }

    int getSchool() const {
        return school;
    }

    float getAverageScore() const {
        return averageScore;
    }

    // Функции для установки значений полей (мутаторы)
    void setFullName(const std::string& name) {
        fullName = name;
    }

    void setBirthYear(int year) {
        birthYear = year;
    }

    void setSchool(int sch) {
        school = sch;
    }

    void setAverageScore(float score) {
        averageScore = score;
    }

    // Перегруженный оператор вывода для удобного вывода данных об абитуриенте
    friend std::ostream& operator<<(std::ostream& os, const Applicant& applicant) {
        os << "| " << std::setw(3) << applicant.getSchool() << "   |"
            << std::setw(16) << applicant.getFullName() << "         | "
            << std::setw(9) << applicant.getBirthYear() << "    | "
            << std::setw(8) << std::fixed << std::setprecision(2) << applicant.getAverageScore() << "     |\n";
        return os;
    }
};


// Класс для представления базы данных абитуриентов
class ApplicantsDatabase {
private:
    std::vector<Applicant> applicants;

public:
    // Добавление абитуриента в базу данных
    void addApplicant(const Applicant& applicant) {
        applicants.push_back(applicant);
        std::cout << "Абитуриент успешно добавлен.\n";
        displayDatabaseEntry(applicant);
        // Отображение добавленного абитуриента
    }

    // Отображение записи базы данных об абитуриенте
    void displayDatabaseEntry(const Applicant& applicant) const {
        std::cout << "-----------------------------------------------------------------\n";
        std::cout << "| Школа |     Имя абитуриента     | Год рождения | Средний балл |\n";
        std::cout << "-----------------------------------------------------------------\n";
        std::cout << applicant;
        std::cout << "-----------------------------------------------------------------\n";
    }

    // Редактирование информации об абитуриенте
    void editApplicant(const std::string& name, const Applicant& newApplicant) {
        auto it = std::find_if(applicants.begin(), applicants.end(),
            [name](const Applicant& applicant) {
                return applicant.getFullName() == name;
            });

        if (it != applicants.end()) {
            *it = newApplicant;
            std::cout << "Абитуриент успешно отредактирован.\n";
            displayDatabaseEntry(newApplicant);
        }
        else {
            std::cerr << "Ошибка: Абитуриент с именем " << name << " не найден.\n";
        }
    }

    // Удаление абитуриента по указанному полю и значению
    void deleteApplicant(const std::string& field, const std::string& value) {
        auto it = std::remove_if(applicants.begin(), applicants.end(),
            [field, value](const Applicant& applicant) {
                if (field == "name") {
                    return applicant.getFullName() == value;
                }
                else if (field == "birthYear") {
                    return std::to_string(applicant.getBirthYear()) == value;
                }
                else if (field == "school") {
                    return std::to_string(applicant.getSchool()) == value;
                }
                else if (field == "averageScore") {
                    return std::to_string(applicant.getAverageScore()) == value;
                }
                return false;
            });

        if (it != applicants.end()) {
            applicants.erase(it, applicants.end());
            std::cout << "Абитуриент успешно удален.\n";
        }
        else {
            std::cerr << "Ошибка: Абитуриент с указанным значением " << value << " не найден.\n";
        }
    }

    // Поиск абитуриентов по указанному полю и значению
    void searchByField(const std::string& field, const std::string& value) const {
        std::cout << "Результаты поиска:\n";
        for (const auto& applicant : applicants) {
            if ((field == "name" && applicant.getFullName() == value) ||
                (field == "birthYear" && std::to_string(applicant.getBirthYear()) == value) ||
                (field == "school" && std::to_string(applicant.getSchool()) == value) ||
                (field == "averageScore" && std::to_string(applicant.getAverageScore()) == value)) {
                displayDatabaseEntry(applicant);
            }
        }
    }

    // Поиск школ с абитуриентами, у которых баллы выше 4.0
    void findSchoolsWithScoreGreaterThan4(const std::unordered_map<int, std::string>& schoolNames) const {
        if (applicants.empty()) {
            std::cout << "В базе нет абитуриентов.\n";
            return;
        }

        std::unordered_map<int, std::vector<std::string>> schoolApplicants;
        std::unordered_map<int, int> totalApplicantsCount;

        for (const auto& applicant : applicants) {
            if (applicant.getAverageScore() > 4.0) {
                schoolApplicants[applicant.getSchool()].push_back(applicant.getFullName());
                totalApplicantsCount[applicant.getSchool()]++;
            }
        }

        std::cout << "\nАбитуриенты с баллами выше 4.0:\n";
        std::cout << "-----------------------------------------------------------------\n";
        std::cout << "| Школа | Количество абитуриентов | Абитуриенты с баллом > 4.0  |\n";
        std::cout << "-----------------------------------------------------------------\n";

        for (const auto& schoolApplicant : schoolApplicants) {
            int schoolId = schoolApplicant.first;
            const std::vector<std::string>& names = schoolApplicant.second;
            int numberOfApplicants = totalApplicantsCount[schoolId];

            std::cout << "|   " << schoolId << "   |           " << numberOfApplicants << "             |\n";
            std::cout << "|---------------------------------|-----------------------------|\n";

            for (const auto& name : names) {
                std::cout << "|                                 |       - " << name << "\n";
            }
            std::cout << "-----------------------------------------------------------------\n";
        }
    }

    // Сохранение данных в файл
    void saveToFile(const std::string& filename) {
        std::ofstream outFile(filename);
        if (outFile.is_open()) {
            for (const auto& applicant : applicants) {
                outFile << applicant.getFullName() << "," << applicant.getBirthYear() << ","
                    << applicant.getSchool() << "," << applicant.getAverageScore() << "\n";
            }
            std::cout << "Данные успешно сохранены в файле.\n";
        }
        else {
            std::cerr << "Ошибка: Невозможно открыть файл для записи.\n";
        }
    }

    // Загрузка данных из файла
    void loadFromFile(const std::string& filename) {
        std::ifstream inFile(filename);
        if (inFile.is_open()) {
            applicants.clear();
            std::string line;
            while (std::getline(inFile, line)) {
                std::istringstream iss(line);
                std::string name;
                int birthYear, school;
                float averageScore;
                char comma;
                if (iss >> name >> comma >> birthYear >> comma >> school >> comma >> averageScore) {
                    applicants.emplace_back(name, birthYear, school, averageScore);
                }
                else {
                    std::cerr << "Ошибка: Неверный формат данных в файле.\n";
                }
            }
            std::cout << "Данные успешно загружены из файла.\n";
        }
        else {
            std::cerr << "Ошибка: Невозможно открыть файл для чтения.\n";
        }
    }

    // Отображение всей базы данных
    void displayDatabase() const {
        std::cout << "\nСодержимое базы данных:\n";
        std::cout << "-----------------------------------------------------------------\n";
        std::cout << "| Школа |     Имя абитуриента     | Год рождения | Средний балл |\n";
        std::cout << "-----------------------------------------------------------------\n";

        for (const auto& applicant : applicants) {
            std::cout << applicant;
        }

        std::cout << "-----------------------------------------------------------------\n";
    }
};

// Главная функция программы
int main() {
    setlocale(LC_ALL, "Ru");
    ApplicantsDatabase database;

    // Бесконечный цикл для отображения меню и выполнения операций
    while (true) {
        std::cout << "\nМеню:\n"
            "1. Добавить нового абитуриента\n"
            "2. Редактировать данные абитуриента\n"
            "3. Удалить абитуриента из базы данных\n"
            "4. Поиск абитуриента по определенному полю\n"
            "5. Найти школу с лучшими абитуриентами (средний балл больше 4)\n"
            "6. Сохранить базу данных в файл\n"
            "7. Загрузить базу данных из файла\n"
            "8. Показать содержимое базы данных\n"
            "9. Выход из программы\n";

        int choice;
        std::cout << "Выберите номер действия: ";
        std::cin >> choice;

        switch (choice) {
        case 1: {
            std::string name;
            int birthYear, school;
            float averageScore;

            std::cout << "Введите полное имя: ";
            std::cin.ignore();
            std::getline(std::cin, name);

            std::cout << "Введите год рождения: ";
            std::cin >> birthYear;

            std::cout << "Введите школу: ";
            std::cin >> school;

            std::cout << "Введите средний балл: ";
            std::cin >> averageScore;

            database.addApplicant(Applicant(name, birthYear, school, averageScore));
            break;
        }
        case 2: {
            std::string name;
            std::cout << "Введите полное имя абитуриента для редактирования: ";
            std::cin.ignore();
            std::getline(std::cin, name);

            std::string newName;
            int newBirthYear, newSchool;
            float newAverageScore;

            std::cout << "Введите новое полное имя: ";
            std::getline(std::cin, newName);

            std::cout << "Введите новый год рождения: ";
            std::cin >> newBirthYear;

            std::cout << "Введите новую школу: ";
            std::cin >> newSchool;

            std::cout << "Введите новый средний балл: ";
            std::cin >> newAverageScore;

            database.editApplicant(name, Applicant(newName, newBirthYear, newSchool, newAverageScore));
            database.displayDatabase();
            break;
        }
        case 3: {
            std::string field, value;
            std::cout << "Введите поле для удаления абитуриента (name, birthYear, school, averageScore): ";
            std::cin >> field;

            std::cout << "Введите значение для поиска: ";
            std::cin >> value;

            database.deleteApplicant(field, value);
            database.displayDatabase();
            break;
        }
        case 4: {
            std::string field, value;
            std::cout << "Введите поле для поиска (name, birthYear, school, averageScore): ";
            std::cin >> field;

            std::cout << "Введите значение для поиска: ";
            std::cin >> value;

            database.searchByField(field, value);
            database.displayDatabase();
            break;
        }
        case 5: {
            std::unordered_map<int, std::string> schoolNames;
            database.findSchoolsWithScoreGreaterThan4(schoolNames);
            database.displayDatabase();
            break;
        }
        case 6: {
            std::string filename;
            std::cout << "Введите имя файла для сохранения: ";
            std::cin >> filename;

            database.saveToFile(filename);
            database.displayDatabase();
            break;
        }
        case 7: {
            std::string filename;
            std::cout << "Введите имя файла для загрузки: ";
            std::cin >> filename;

            database.loadFromFile(filename);
            database.displayDatabase();
            break;
        }
        case 8:
            database.displayDatabase();
            break;
        case 9:
            std::cout << "Выход из программы. До свидания!\n";
            return 0;
        default:
            std::cerr << "Неверный выбор. Пожалуйста, введите действительный вариант.\n";
        }
    }
}





//#include <iostream>
//#include <vector>
//#include <algorithm>
//#include <fstream>
//#include <sstream>
//#include <unordered_map>
//
//class Applicant {
//protected:
//    std::string fullName;
//    int birthYear;
//    int school;
//    float averageScore;
//
//public:
//    Applicant(const std::string& name, int year, int sch, float score)
//        : fullName(name), birthYear(year), school(sch), averageScore(score) {}
//
//    // Accessor functions
//    const std::string& getFullName() const {
//        return fullName;
//    }
//
//    int getBirthYear() const {
//        return birthYear;
//    }
//
//    int getSchool() const {
//        return school;
//    }
//
//    float getAverageScore() const {
//        return averageScore;
//    }
//
//    // Mutator functions
//    void setFullName(const std::string& name) {
//        fullName = name;
//    }
//
//    void setBirthYear(int year) {
//        birthYear = year;
//    }
//
//    void setSchool(int sch) {
//        school = sch;
//    }
//
//    void setAverageScore(float score) {
//        averageScore = score;
//    }
//
//    friend std::ostream& operator<<(std::ostream& os, const Applicant& applicant) {
//        os << "Имя: " << applicant.fullName << "\n"
//            << "Год рождения: " << applicant.birthYear << "\n"
//            << "Школа: " << applicant.school << "\n"
//            << "Средний балл: " << applicant.averageScore << "\n";
//        return os;
//    }
//};
//
//class ApplicantsDatabase {
//private:
//    std::vector<Applicant> applicants;
//
//public:
//    void addApplicant(const Applicant& applicant) {
//        applicants.push_back(applicant);
//        std::cout << "Абитуриент успешно добавлен.\n";
//    }
//
//    void editApplicant(const std::string& fullName, const Applicant& newData) {
//        auto it = std::find_if(applicants.begin(), applicants.end(), [&fullName](const Applicant& a) {
//            return a.getFullName() == fullName;
//            });
//
//        if (it != applicants.end()) {
//            *it = newData;
//            std::cout << "Абитуриент успешно отредактирован.\n";
//        }
//        else {
//            std::cout << "Абитуриент не найден.\n";
//        }
//    }
//
//    void deleteApplicant(const std::string& field, const std::string& value) {
//        auto it = std::remove_if(applicants.begin(), applicants.end(), [&field, &value](const Applicant& a) {
//            if (field == "name" && a.getFullName() == value) {
//                return true;
//            }
//            else if (field == "birthYear" && std::to_string(a.getBirthYear()) == value) {
//                return true;
//            }
//            else if (field == "school" && std::to_string(a.getSchool()) == value) {
//                return true;
//            }
//            else if (field == "averageScore" && std::to_string(a.getAverageScore()) == value) {
//                return true;
//            }
//            return false;
//            });
//
//        if (it != applicants.end()) {
//            applicants.erase(it, applicants.end());
//            std::cout << "Абитуриент успешно удален.\n";
//        }
//        else {
//            std::cout << "Абитуриент не найден.\n";
//        }
//    }
//
//    void searchByField(const std::string& field, const std::string& value) const {
//        std::cout << "Результаты поиска:\n";
//        for (const auto& applicant : applicants) {
//            if ((field == "name" && applicant.getFullName() == value) ||
//                (field == "birthYear" && std::to_string(applicant.getBirthYear()) == value) ||
//                (field == "school" && std::to_string(applicant.getSchool()) == value) ||
//                (field == "averageScore" && std::to_string(applicant.getAverageScore()) == value)) {
//                std::cout << applicant << "\n";
//            }
//        }
//    }
//
//    void findSchoolsWithScoreGreaterThan4(const std::unordered_map<int, std::string>& schoolNames) const {
//        if (applicants.empty()) {
//            std::cout << "В базе нет абитуриентов.\n";
//            return;
//        }
//
//        std::unordered_map<int, std::vector<std::string>> schoolApplicants;
//        std::unordered_map<int, int> totalApplicantsCount;
//
//        for (const auto& applicant : applicants) {
//            if (applicant.getAverageScore() > 4.0) {
//                schoolApplicants[applicant.getSchool()].push_back(applicant.getFullName());
//                totalApplicantsCount[applicant.getSchool()]++;
//            }
//        }
//
//        std::cout << "-----------------------------------------------------------------\n";
//        std::cout << "| Школа | Количество абитуриентов | Абитуриенты с баллом > 4.0  |\n";
//        std::cout << "-----------------------------------------------------------------\n";
//
//        for (const auto& schoolApplicant : schoolApplicants) {
//            int schoolId = schoolApplicant.first;
//            const std::vector<std::string>& names = schoolApplicant.second;
//            int numberOfApplicants = totalApplicantsCount[schoolId];
//
//            std::cout << "|   " << schoolId << "   |           " << numberOfApplicants << "             |\n";
//            std::cout << "|---------------------------------|-----------------------------|\n";
//
//            for (const auto& name : names) {
//                std::cout << "|                                 |       - " << name << "\n";
//            }
//            std::cout << "-----------------------------------------------------------------\n";
//        }
//    }
//
//
//    void saveToFile(const std::string& filename) {
//        std::ofstream outFile(filename);
//        if (outFile.is_open()) {
//            for (const auto& applicant : applicants) {
//                outFile << applicant.getFullName() << "," << applicant.getBirthYear() << ","
//                    << applicant.getSchool() << "," << applicant.getAverageScore() << "\n";
//            }
//            std::cout << "Данные успешно сохранены в файле.\n";
//        }
//        else {
//            std::cerr << "Ошибка: Невозможно открыть файл для записи.\n";
//        }
//    }
//
//    void loadFromFile(const std::string& filename) {
//        std::ifstream inFile(filename);
//        if (inFile.is_open()) {
//            applicants.clear();
//            std::string line;
//            while (std::getline(inFile, line)) {
//                std::istringstream iss(line);
//                std::string name;
//                int birthYear, school;
//                float averageScore;
//                char comma;
//                if (iss >> name >> comma >> birthYear >> comma >> school >> comma >> averageScore) {
//                    applicants.emplace_back(name, birthYear, school, averageScore);
//                }
//                else {
//                    std::cerr << "Ошибка: Неверный формат данных в файле.\n";
//                }
//            }
//            std::cout << "Данные успешно загружены из файла.\n";
//        }
//        else {
//            std::cerr << "Ошибка: Невозможно открыть файл для чтения.\n";
//        }
//    }
//
//    void displayDatabase() const {
//        std::cout << "База данных абитуриентов:\n";
//        for (const auto& applicant : applicants) {
//            std::cout << "--------------------\n";
//            std::cout << applicant;
//        }
//        std::cout << "--------------------\n";
//    }
//};
//
//int main() {
//    setlocale(LC_ALL, "Ru");
//    ApplicantsDatabase database;
//
//    while (true) {
//        std::cout << "\nМеню:\n"
//            "1. Добавить абитуриента\n"
//            "2. Изменить абитуриента\n"
//            "3. Удалить абитуриента\n"
//            "4. Поиск по полю\n"
//            "5. Найдите школу с абитуриентами с максимальным количеством баллов\n"
//            "6. Сохранить в файл\n"
//            "7. Загрузить из файла\n"
//            "8. Показать базу данных\n"
//            "9. Выход\n";
//
//        int choice;
//        std::cout << "Введите свой выбор: ";
//        std::cin >> choice;
//
//        switch (choice) {
//        case 1: {
//            std::string name;
//            int birthYear, school;
//            float averageScore;
//
//            std::cout << "Введите полное имя: ";
//            std::cin.ignore();
//            std::getline(std::cin, name);
//
//            std::cout << "Введите год рождения: ";
//            std::cin >> birthYear;
//
//            std::cout << "Введите школу: ";
//            std::cin >> school;
//
//            std::cout << "Введите средний балл: ";
//            std::cin >> averageScore;
//
//            database.addApplicant(Applicant(name, birthYear, school, averageScore));
//            database.displayDatabase();
//            break;
//        }
//        case 2: {
//            std::string name;
//            std::cout << "Введите полное имя абитуриента для редактирования: ";
//            std::cin.ignore();
//            std::getline(std::cin, name);
//
//            std::string newName;
//            int newBirthYear, newSchool;
//            float newAverageScore;
//
//            std::cout << "Введите новое полное имя: ";
//            std::getline(std::cin, newName);
//
//            std::cout << "Введите новый год рождения: ";
//            std::cin >> newBirthYear;
//
//            std::cout << "Введите новую школу: ";
//            std::cin >> newSchool;
//
//            std::cout << "Введите новый средний балл: ";
//            std::cin >> newAverageScore;
//
//            database.editApplicant(name, Applicant(newName, newBirthYear, newSchool, newAverageScore));
//            database.displayDatabase();
//            break;
//        }
//        case 3: {
//            std::string field, value;
//            std::cout << "Введите поле для удаления абитуриента (name, birthYear, school, averageScore): ";
//            std::cin >> field;
//
//            std::cout << "Введите значение для поиска: ";
//            std::cin >> value;
//
//            database.deleteApplicant(field, value);
//            database.displayDatabase();
//            break;
//        }
//        case 4: {
//            std::string field, value;
//            std::cout << "Введите поле для поиска (name, birthYear, school, averageScore): ";
//            std::cin >> field;
//
//            std::cout << "Введите значение для поиска: ";
//            std::cin >> value;
//
//            database.searchByField(field, value);
//            database.displayDatabase();
//            break;
//        }
//
//        case 5: {
//            std::unordered_map<int, std::string> schoolNames; 
//            database.findSchoolsWithScoreGreaterThan4(schoolNames);
//            database.displayDatabase();
//            break;
//        }
//        case 6: {
//            std::string filename;
//            std::cout << "Введите имя файла для сохранения: ";
//            std::cin >> filename;
//
//            database.saveToFile(filename);
//            database.displayDatabase();
//            break;
//        }
//        case 7: {
//            std::string filename;
//            std::cout << "Введите имя файла для загрузки: ";
//            std::cin >> filename;
//
//            database.loadFromFile(filename);
//            database.displayDatabase();
//            break;
//        }
//        case 8:
//            database.displayDatabase();
//            break;
//        case 9:
//            std::cout << "Выход из программы. До свидания!\n";
//            return 0;
//       default:
//           std::cerr << "Неверный выбор. Пожалуйста, введите действительный вариант.\n";
//        }
//    }
//}


//#include <iostream>
//#include <vector>
//#include <algorithm>
//#include <fstream>
//#include <sstream>
//#include <unordered_map>
//
//class Applicant {
//public:
//    std::string fullName;
//    int birthYear;
//    int school;
//    float averageScore;
//
//    Applicant(const std::string& name, int year, int sch, float score)
//        : fullName(name), birthYear(year), school(sch), averageScore(score) {}
//
//    friend std::ostream& operator<<(std::ostream& os, const Applicant& applicant) {
//        os << "Имя: " << applicant.fullName << "\n"
//            << "Год рождения: " << applicant.birthYear << "\n"
//            << "Школа: " << applicant.school << "\n"
//            << "Средний балл: " << applicant.averageScore << "\n";
//        return os;
//    }
//};
//
//class ApplicantsDatabase {
//private:
//    std::vector<Applicant> applicants;
//
//public:
//    void addApplicant(const Applicant& applicant) {
//        applicants.push_back(applicant);
//        std::cout << "Абитуриент успешно добавлен.\n";
//    }
//
//    void editApplicant(const std::string& fullName, const Applicant& newData) {
//        auto it = std::find_if(applicants.begin(), applicants.end(), [&fullName](const Applicant& a) {
//            return a.fullName == fullName;
//            });
//
//        if (it != applicants.end()) {
//            *it = newData;
//            std::cout << "Абитуриент успешно отредактирован.\n";
//        }
//        else {
//            std::cout << "Абитуриент не найден.\n";
//        }
//    }
//
//    void deleteApplicant(const std::string& field, const std::string& value) {
//        auto it = std::remove_if(applicants.begin(), applicants.end(), [&field, &value](const Applicant& a) {
//            if (field == "name" && a.fullName == value) {
//                return true;
//            }
//            else if (field == "birthYear" && std::to_string(a.birthYear) == value) {
//                return true;
//            }
//            else if (field == "school" && std::to_string(a.school) == value) {
//                return true;
//            }
//            else if (field == "averageScore" && std::to_string(a.averageScore) == value) {
//                return true;
//            }
//            return false;
//            });
//
//        if (it != applicants.end()) {
//            applicants.erase(it, applicants.end());
//            std::cout << "Абитуриент успешно удален.\n";
//        }
//        else {
//            std::cout << "Абитуриент не найден.\n";
//        }
//    }
//
//
//    void searchByField(const std::string& field, const std::string& value) {
//        std::cout << "Результаты поиска:\n";
//        for (const auto& applicant : applicants) {
//            if ((field == "name" && applicant.fullName == value) ||
//                (field == "birthYear" && std::to_string(applicant.birthYear) == value) ||
//                (field == "school" && std::to_string(applicant.school) == value) ||
//                (field == "averageScore" && std::to_string(applicant.averageScore) == value)) {
//                std::cout << applicant << "\n";
//            }
//        }
//    }
//
//    void findSchoolsWithScoreGreaterThan4() {
//        if (applicants.empty()) {
//            std::cout << "В базе нет абитуриентов.\n";
//            return;
//        }
//
//        std::unordered_map<int, std::vector<std::string>> schoolApplicants;
//        std::unordered_map<std::string, int> totalApplicantsCount;
//        int totalApplicants = 0;
//
//        for (const auto& applicant : applicants) {
//            if (applicant.averageScore > 4.0) {
//                schoolApplicants[applicant.school].push_back(applicant.fullName);
//                totalApplicantsCount[applicant.fullName]++;
//                totalApplicants++;
//            }
//        }
//
//        std::cout << "Всего абитуриентов со средним баллом > 4.0: " << totalApplicants << "\n";
//
//        for (const auto& schoolApplicant : schoolApplicants) {
//            std::cout << "School: " << schoolApplicant.first << "\n";
//            for (const auto& name : schoolApplicant.second) {
//                std::cout << "   - " << name << " (Количество заявителей: " << totalApplicantsCount[name] << ")\n";
//            }
//        }
//    }
//
//
//    void saveToFile(const std::string& filename) {
//        std::ofstream outFile(filename);
//        if (outFile.is_open()) {
//            for (const auto& applicant : applicants) {
//                outFile << applicant.fullName << "," << applicant.birthYear << ","
//                    << applicant.school << "," << applicant.averageScore << "\n";
//            }
//            std::cout << "Данные успешно сохранены в файле.\n";
//        }
//        else {
//            std::cerr << "Ошибка: Невозможно открыть файл для записи.\n";
//        }
//    }
//
//    void loadFromFile(const std::string& filename) {
//        std::ifstream inFile(filename);
//        if (inFile.is_open()) {
//            applicants.clear();
//            std::string line;
//            while (std::getline(inFile, line)) {
//                std::istringstream iss(line);
//                std::string name;
//                int birthYear, school;
//                float averageScore;
//                char comma;
//                if (iss >> name >> comma >> birthYear >> comma >> school >> comma >> averageScore) {
//                    applicants.emplace_back(name, birthYear, school, averageScore);
//                }
//                else {
//                    std::cerr << "Ошибка: Неверный формат данных в файле.\n";
//                }
//            }
//            std::cout << "Данные успешно загружены из файла.\n";
//        }
//        else {
//            std::cerr << "Ошибка: Невозможно открыть файл для чтения.\n";
//        }
//    }
//
//    void displayDatabase() const {
//        std::cout << "База данных абитуриентов:\n";
//        for (const auto& applicant : applicants) {
//            std::cout << "--------------------\n";
//            std::cout << applicant;
//        }
//        std::cout << "--------------------\n";
//    }
//};
//
//int main() {
//    setlocale(LC_ALL, "Ru");
//    ApplicantsDatabase database;
//
//    while (true) {
//        std::cout << "\nМеню:\n"
//            "1. Добавить абитуриента\n"
//            "2. Изменить абитуриента\n"
//            "3. Удалить абитуриента\n"
//            "4. Поиск по полю\n"
//            "5. Найдите школу с абитуриентами с максимальным количеством баллов\n"
//            "6. Сохранить в файл\n"
//            "7. Загрузить из файла\n"
//            "8. Показать базу данных\n"
//            "9. Выход\n";
//
//        int choice;
//        std::cout << "Введите свой выбор: ";
//        std::cin >> choice;
//
//        switch (choice) {
//        case 1: {
//            std::string name;
//            int birthYear, school;
//            float averageScore;
//
//            std::cout << "Введите полное имя: ";
//            std::cin.ignore();
//            std::getline(std::cin, name);
//
//            std::cout << "Введите год рождения: ";
//            std::cin >> birthYear;
//
//            std::cout << "Введите школу: ";
//            std::cin >> school;
//
//            std::cout << "Введите средний балл: ";
//            std::cin >> averageScore;
//
//            database.addApplicant(Applicant(name, birthYear, school, averageScore));
//            database.displayDatabase();
//            break;
//        }
//        case 2: {
//            std::string name;
//            std::cout << "Введите полное имя абитуриента для редактирования: ";
//            std::cin.ignore();
//            std::getline(std::cin, name);
//
//            std::string newName;
//            int newBirthYear, newSchool;
//            float newAverageScore;
//
//            std::cout << "Введите новое полное имя: ";
//            std::getline(std::cin, newName);
//
//            std::cout << "Введите новый год рождения: ";
//            std::cin >> newBirthYear;
//
//            std::cout << "Введите новую школу: ";
//            std::cin >> newSchool;
//
//            std::cout << "Введите новый средний балл: ";
//            std::cin >> newAverageScore;
//
//            database.editApplicant(name, Applicant(newName, newBirthYear, newSchool, newAverageScore));
//            database.displayDatabase();
//            break;
//        } 
//        case 3: {
//            std::string field, value;
//            std::cout << "Введите поле для удаления абитуриента (name, birthYear, school, averageScore): ";
//            std::cin >> field;
//
//            std::cout << "Введите значение для поиска: ";
//            std::cin >> value;
//
//            database.deleteApplicant(field, value);
//            database.displayDatabase();
//            break;
//        }
//        case 4: {
//            std::string field, value;
//            std::cout << "Введите поле для поиска (name, birthYear, school, averageScore): ";
//            std::cin >> field;
//
//            std::cout << "Введите значение для поиска: ";
//            std::cin >> value;
//
//            database.searchByField(field, value);
//            database.displayDatabase();
//            break;
//        }
//        case 5:
//            database.findSchoolsWithScoreGreaterThan4();
//            database.displayDatabase();
//            break;
//        case 6: {
//            std::string filename;
//            std::cout << "Введите имя файла для сохранения: ";
//            std::cin >> filename;
//
//            database.saveToFile(filename);
//            database.displayDatabase();
//            break;
//        }
//        case 7: {
//            std::string filename;
//            std::cout << "Введите имя файла для загрузки: ";
//            std::cin >> filename;
//
//            database.loadFromFile(filename);
//            database.displayDatabase();
//            break;
//        }
//        case 8:
//            database.displayDatabase();
//            break;
//        case 9:
//            std::cout << "Выход из программы. До свидания!\n";
//            return 0;
//        default:
//            std::cerr << "Неверный выбор. Пожалуйста, введите действительный вариант.\n";
//        }
//    }
//}
//
//
//
//
//
//
