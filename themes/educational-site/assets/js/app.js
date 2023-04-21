import Alpine from 'alpinejs';
import {allCourses} from './mock';

window.Alpine = Alpine;

Alpine.store('courses', {
    allCourses: allCourses,
    filteredCourses: allCourses,
    category: [],
    level: [],
    searchTitle: '',
    filterCourses() {
        this.filteredCourses = this.allCourses.filter((course) => {
            const includesCategory = !this.category.length ? true : this.category.includes(course.category.toLowerCase());
            const includesLevel = !this.level.length ? true : this.level.includes(course.level.toLocaleLowerCase());
            const includesSearch = !this.searchTitle ? true : course.title.toLowerCase().includes(this.searchTitle.toLowerCase());
            return includesCategory && includesLevel && includesSearch;
        });
    },
});

Alpine.start();
