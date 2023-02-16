'use strict';

var teams = new Map();
teams.set('lg', '트윈스');
teams.set('samsung', '라이온스');
teams.set('nc', '다이노스');
teams.set('kia', '타이거스');
teams.set('hw', '이글스');
teams.set('lt', '자이언츠');

console.log(teams.has('sk'));
console.log(teams.get('lg'));
console.log(teams.has('lg'));