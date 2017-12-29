;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M871.812879 820.032562c0 15.286148-12.392238 27.678386-27.678386 27.678386s-27.678386-12.392238-27.678386-27.678386c0-3.273557 0-8.120958 0-14.983249 0-69.394487-141.16816-167.460989-303.301817-167.460989-128.897695 0-305.612443 82.659605-305.612443 164.698063 0 8.05956 0 14.471596 0 17.745153 0 15.286148-12.392238 27.678386-27.678386 27.678386-15.285125 0-27.678386-12.392238-27.678386-27.678386 0-3.273557 0-16.968463 0-34.828226 0-41.467437 61.594847-148.141992 229.826386-187.776687-60.754712-41.537022-100.662631-111.331621-100.662631-190.483332 0-127.381156 103.264898-230.655264 230.649124-230.655264 127.386272 0 230.649124 103.274108 230.649124 230.655264 0 77.837786-38.671765 146.525168-97.730858 188.292434 170.040744 38.058804 226.894613 150.176324 226.894613 189.966563C871.812879 803.237037 871.812879 816.759005 871.812879 820.032562zM687.293375 406.939199c0-96.807836-78.483492-175.293375-175.293375-175.293375s-175.293375 78.485539-175.293375 175.293375c0 96.821139 78.483492 175.293375 175.293375 175.293375S687.293375 503.760338 687.293375 406.939199z" fill="#bf2071" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wode1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M955.923532 922.936233c1.231037 4.084015 2.091638 8.329712 2.091638 12.81691 0 24.64019-19.951401 44.602847-44.570101 44.602847-24.615631 0-44.567032-19.962657-44.567032-44.602847 0-0.049119 0.013303-0.094144 0.013303-0.143263l-1.166569 0c-11.606339-186.693006-166.216649-334.626243-355.781052-334.626243-189.568497 0-344.178807 147.933237-355.785146 334.626243l-1.055029 0c0.002047 0.049119 0.01535 0.094144 0.01535 0.143263 0 24.64019-19.952424 44.602847-44.570101 44.602847-24.615631 0-44.567032-19.962657-44.567032-44.602847 0-4.226255 0.775666-8.234545 1.873674-12.110829C80.799234 754.241137 187.807387 611.205443 337.194742 547.482119c-69.481468-50.685379-114.818025-132.506896-114.818025-225.116107 0-153.925718 124.738979-278.723026 278.622742-278.723026 153.874553 0 278.620695 124.796284 278.620695 278.723026 0 89.328491-42.174542 168.638815-107.507526 219.645512C828.733735 602.420359 942.290023 748.498342 955.923532 922.936233zM690.305989 322.366012c0-104.572684-84.903715-189.338253-189.632965-189.338253-104.737436 0-189.637058 84.765569-189.637058 189.338253 0 104.563474 84.899622 189.336206 189.637058 189.336206C605.402273 511.702218 690.305989 426.929486 690.305989 322.366012z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M254.527974 957.805392c-33.06507 0-71.669296-19.498076-71.669296-74.438363L182.858678 574.234413l-65.526389 0c-11.961426 0-25.412786-7.730055-35.986609-20.681018-11.126408-13.624299-17.253966-31.169907-17.253966-49.408293l0-8.111748L485.409388 68.575842c4.933359-4.835122 11.906168-7.286963 20.735253-7.286963 9.959839 0 17.538445 2.475378 22.515806 7.355525C530.136056 70.091358 909.774469 448.8968 953.060321 492.086461l5.867638 5.855358 0 8.214079c0 18.723434-3.212158 33.088606-9.81453 43.906999-8.724709 14.294564-23.421432 22.165836-41.37534 22.165836l-63.540152 0-0.971118 313.551252-0.559748 2.285043c-0.430812 1.741667-4.497431 17.483186-15.412015 33.533744-16.033162 23.577998-38.47836 36.039821-64.907289 36.039821l-155.644873 0 0.024559-20.09671c0.096191-78.827323 0.280386-285.386796 0.010233-294.463522-0.144286-4.693906-4.821819-16.649192-10.250458-16.649192L427.556773 626.429169c-3.756557 0-11.265578 6.939039-11.265578 16.055674l0 315.15375L259.485893 957.638593C258.355139 957.717388 256.659521 957.805392 254.527974 957.805392L254.527974 957.805392zM119.498628 534.089088l104.309694 0 0 349.276918c0 8.479115 0 34.294061 30.719652 34.294061 0.99977 0 1.681292-0.044002 1.936095-0.057305l1.236154-0.161682 0.919952 0.049119 116.717282 0L375.337457 642.48382c0-29.939893 24.40176-56.206116 52.214199-56.206116l168.936597 0c16.313547 0 30.655184 8.175193 40.388872 23.019273 7.583722 11.56336 10.55131 24.422226 10.79588 32.597419 0.295735 9.867742 0.100284 210.16765 0.030699 275.598872l114.645087 0c26.523073 0 37.418214-28.856211 39.939641-36.913724l1.079588-348.497159L907.73809 532.082384c4.623297 0 5.368264-1.220804 6.232958-2.638083 1.191128-1.947352 3.021823-6.326079 3.722788-15.363919-47.833425-47.727001-358.423229-357.63426-410.628218-409.705196L105.686041 511.609097C108.068298 525.030781 116.41643 532.24509 119.498628 534.089088L119.498628 534.089088zM119.498628 534.089088" fill="#ffffff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M519.232 64 64 523.648l143.616 0L207.616 960l234.112 0-0.96-292.032 145.664 0 0 291.008 230.144 0L816.576 524.736 960 524.736 519.232 64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M245.871 14.074c-18.766 18.766-18.766 49.473 0 68.239l429.901 429.901-429.901 429.901c-18.766 18.766-18.766 49.473 0 68.239s49.473 18.766 68.239 0l464.020-464.020c18.766-18.766 18.766-49.473 0-68.239l-464.020-464.020c-18.766-18.766-49.473-18.766-68.239 0z" fill="#9C9C9C" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.881 249.91c-122.036-122.092-319.94-122.092-442.033 0s-122.093 319.997 0 442.033c56.558 56.574 134.7 91.567 221.017 91.567 86.316 0 164.458-34.994 221.016-91.567 56.575-56.558 91.568-134.701 91.568-221.017 0-86.316-34.994-164.458-91.567-221.016zM181.8 759.992c-74.010-73.991-119.787-176.22-119.787-289.14 0-225.802 183.050-408.852 408.852-408.852 225.803 0 408.852 183.050 408.852 408.852 0 112.92-45.778 215.149-119.787 289.139-73.985 73.966-176.183 119.713-289.065 119.713-112.883 0-215.080-45.747-289.065-119.713zM945.517 945.579c-10.099 10.115-24.058 16.372-39.48 16.372s-29.381-6.257-39.479-16.371l-78.903-78.959c-10.097-10.097-16.342-24.045-16.342-39.452 0-30.814 24.98-55.792 55.792-55.792 15.406 0 29.355 6.245 39.452 16.341l78.958 78.903c10.142 10.087 16.418 24.050 16.418 39.479s-6.277 29.393-16.416 39.477z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyou-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M245.871 14.074c-18.766 18.766-18.766 49.473 0 68.239l429.901 429.901-429.901 429.901c-18.766 18.766-18.766 49.473 0 68.239s49.473 18.766 68.239 0l464.020-464.020c18.766-18.766 18.766-49.473 0-68.239l-464.020-464.020c-18.766-18.766-49.473-18.766-68.239 0z" fill="#ffffff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chengyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M487.228 667.318c-19.282-3.124-19.718-57.164-19.718-57.164s56.646-57.174 68.992-134.048c33.208 0 53.718-81.724 20.51-110.48C558.394 335.356 599.7 128 390.6 128c-209.098 0-167.794 207.356-166.41 237.626-33.212 28.756-12.7 110.48 20.508 110.48 12.346 76.876 68.992 134.048 68.992 134.048s-0.438 54.04-19.718 57.164C231.878 677.392 0 781.664 0 896h781.196c0.002-114.336-231.874-218.608-293.968-228.682z m259.564-13.35c-18.186-2.942-18.596-53.902-18.596-53.902s53.414-53.914 65.058-126.404c31.314 0 50.658-77.07 19.342-104.182 1.304-28.542 40.25-224.076-156.924-224.076-19.776 0-37.168 1.97-52.468 5.538 85.54 57.394 60.586 186.776 59.516 210.192 33.208 28.756 12.7 110.478-20.512 110.478-9.57 59.602-45.764 107.354-61.548 125.806-0.99 2.748-2.324 8.914-2.324 8.914s-2.666 18.666-1.152 33.104c2.8 11.614 7.586 22.066 15.754 23.39 58.102 9.43 264.866 101.332 291.196 206.788H1024c0-107.818-218.658-206.144-277.208-215.646z" fill="#D6204B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1024 447.67H243.021L601.158 89.535 511.624 0 0 511.624l511.624 511.624 89.534-89.535-358.137-358.136h780.227V447.67z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chaxun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M196.16 460.352h580.928l0.512 29.696c4.096-0.192 7.744-1.28 11.904-1.28 26.112 0 50.624 5.44 74.24 13.44v-246.72H692.352V126.016H81.984V910.4h530.624c-40.64-45.504-65.92-100.096-65.92-167.232 0-18.496 2.112-36.48 5.696-54.016H196.672v-88h391.424c16.192-25.28 36.992-46.848 60.736-64.64h-452.16l-0.512-76.16z m1.152-60.992v-72.768h409.92v72.768" fill="#E98F36" ></path>' +
    '' +
    '<path d="M715.008 126.016V226.88h148.736zM983.104 896.128l-75.136-76.736c17.152-26.88 27.392-58.88 27.392-93.376 0-93.888-74.24-170.048-165.888-170.048-91.52 0-165.888 76.16-165.888 170.048 0 94.016 74.368 170.112 165.888 170.112 28.096 0 54.144-7.872 77.376-20.48l76.096 78.144 60.16-57.664zM670.528 726.016c0-56 44.352-101.504 99.008-101.504s98.88 45.504 98.88 101.504-44.224 101.504-98.88 101.504-99.008-45.504-99.008-101.504z" fill="#E98F36" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingdan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M878.933 238.933h-93.866C776.533 102.4 657.067 0 520.533 0c-136.533 0-256 102.4-256 238.933H145.067L42.667 1024h938.666l-102.4-785.067z m-358.4-170.666c102.4 0 179.2 76.8 187.734 170.666H332.8c8.533-93.866 85.333-170.666 187.733-170.666zM307.2 486.4c-25.6 0-51.2-17.067-51.2-42.667s17.067-42.666 51.2-42.666c25.6 0 42.667 17.066 42.667 42.666 0 25.6-17.067 42.667-42.667 42.667z m418.133 0c-25.6 0-42.666-17.067-42.666-42.667s17.066-51.2 42.666-51.2c25.6 0 51.2 17.067 51.2 42.667s-25.6 51.2-51.2 51.2z" fill="#1296DB" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-erweima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M617.566 77.772H65.171v552.395h552.395V77.772zM512.35 524.95h-341.96V182.99h341.96v341.96zM512.349 682.777h105.218v105.218H512.35V682.777zM696.48 77.772H801.7v105.219H696.481V77.772zM65.171 682.777h368.264v105.218H65.17V682.777zM696.48 261.904H801.7v368.263H696.481V261.904z" fill="#D4237A" ></path>' +
    '' +
    '<path d="M249.303 261.904h184.132v184.132H249.303V261.904zM696.48 945.821h263.046V682.777H696.48V945.82z m78.914-184.131h105.218v105.218H775.394V761.69zM854.307 524.95h105.219v105.218H854.307V524.95zM854.307 77.772h105.219v368.264H854.307V77.772zM65.171 840.604H170.39v105.218H65.17V840.604zM249.303 840.604H643.87v105.218H249.303V840.604z" fill="#D4237A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-daijinquan" viewBox="0 0 2284 1024">' +
    '' +
    '<path d="M2284.544 78.336V0H0v78.336c22.528 0 41.472 17.92 41.472 40.96v1.024c0 22.528-18.944 41.472-41.472 41.472V235.52c22.528 0 41.472 17.92 41.472 40.96v1.024c0 22.528-18.944 41.472-41.472 41.472v73.728c22.528 0 41.472 17.92 41.472 40.96v1.024C41.472 457.216 22.528 476.16 0 476.16v73.728c22.528 0 41.472 17.92 41.472 40.96v1.024c0 22.528-18.944 41.472-41.472 41.472v73.728c22.528 0 41.472 17.92 41.472 40.96v1.024c0 22.528-18.944 41.472-41.472 41.472v73.728c22.528 0 41.472 17.92 41.472 40.96v1.024c0 22.528-18.944 41.472-41.472 41.472V1024h2284.544v-78.336c-22.528 0-41.472-18.432-41.472-41.472v-1.024c0-22.528 18.944-40.96 41.472-40.96V788.48c-22.528 0-41.472-18.432-41.472-41.472v-1.024c0-22.528 18.944-40.96 41.472-40.96v-73.728c-22.528 0-41.472-18.432-41.472-41.472v-1.024c0-22.528 18.944-40.96 41.472-40.96V475.136c-22.528 0-41.472-18.432-41.472-41.472v-1.024c0-22.528 18.944-40.96 41.472-40.96V318.464c-22.528 0-41.472-18.432-41.472-41.472V276.48c0-22.528 18.944-40.96 41.472-40.96V161.792c-22.528 0-41.472-18.432-41.472-41.472v-1.024c0-22.528 18.432-40.96 41.472-40.96z" fill="#BF2071" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chengyuan1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M487.228 667.318c-19.282-3.124-19.718-57.164-19.718-57.164s56.646-57.174 68.992-134.048c33.208 0 53.718-81.724 20.51-110.48C558.394 335.356 599.7 128 390.6 128c-209.098 0-167.794 207.356-166.41 237.626-33.212 28.756-12.7 110.48 20.508 110.48 12.346 76.876 68.992 134.048 68.992 134.048s-0.438 54.04-19.718 57.164C231.878 677.392 0 781.664 0 896h781.196c0.002-114.336-231.874-218.608-293.968-228.682z m259.564-13.35c-18.186-2.942-18.596-53.902-18.596-53.902s53.414-53.914 65.058-126.404c31.314 0 50.658-77.07 19.342-104.182 1.304-28.542 40.25-224.076-156.924-224.076-19.776 0-37.168 1.97-52.468 5.538 85.54 57.394 60.586 186.776 59.516 210.192 33.208 28.756 12.7 110.478-20.512 110.478-9.57 59.602-45.764 107.354-61.548 125.806-0.99 2.748-2.324 8.914-2.324 8.914s-2.666 18.666-1.152 33.104c2.8 11.614 7.586 22.066 15.754 23.39 58.102 9.43 264.866 101.332 291.196 206.788H1024c0-107.818-218.658-206.144-277.208-215.646z" fill="#D6204B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M190 514a3 3 0 1 0 96 0 3 3 0 1 0-96 0zM462 514a3 3 0 1 0 96 0 3 3 0 1 0-96 0zM734 514a3 3 0 1 0 96 0 3 3 0 1 0-96 0z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1687 1024">' +
    '' +
    '<path d="M692.996 331.025c-12.386-12.388-32.454-12.388-44.842 0L512.02 467.158 375.887 331.025c-12.386-12.388-32.455-12.388-44.842 0-12.386 12.387-12.386 32.455 0 44.842l136.132 136.134-136.133 136.133c-12.386 12.39-12.386 32.455 0 44.84 6.195 6.197 14.307 9.291 22.42 9.291 8.114 0 16.229-3.094 22.42-9.29L512.019 556.84l136.134 136.134c6.194 6.196 14.308 9.29 22.422 9.29s16.226-3.094 22.42-9.29c12.387-12.386 12.387-32.453 0-44.841L556.859 512l136.134-136.133c12.386-12.387 12.386-32.454 0-44.842h0.003z" fill="#999999" ></path>' +
    '' +
    '<path d="M512.02 0C229.79 0 0 229.648 0 512.02S229.753 1024 512.02 1024c282.338 0 512.019-229.608 512.019-511.98S794.39 0 512.02 0z m0 959.904c-247.038 0-447.957-200.951-447.957-447.923 0-247.11 200.919-447.99 447.957-447.99 247.038 0 447.994 200.88 447.994 447.99 0.032 246.972-200.956 447.923-447.994 447.923z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kefu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.286 138.829c-155.983 0-282.403 123.767-282.403 276.484 0 152.696 126.42 276.48 282.403 276.48 155.985 0 282.405-123.784 282.405-276.48 0-152.717-126.42-276.484-282.405-276.484z" fill="#E98F36" ></path>' +
    '' +
    '<path d="M184.191 521.44V266.188c-3.577 0-7.118 0.146-10.621 0.423C231.441 140.98 360.333 53.489 510.326 53.489c149.994 0 278.888 87.491 336.756 213.124a134.44 134.44 0 0 0-10.62-0.424V521.44c72.03 0 130.462-57.148 130.462-127.624 0-47.864-26.952-89.57-66.808-111.413-56.084-157.976-209.19-271.441-389.79-271.441-180.593 0-333.696 113.458-389.784 271.428-39.868 21.84-66.813 63.553-66.813 111.425 0 70.477 58.39 127.624 130.462 127.624zM792.095 667.77C718.3 735.195 619.23 776.482 510.285 776.482c-108.742 0-207.647-41.135-281.397-108.338C96.897 734.637 10.24 852.99 10.24 1013.766h1003.52c0-161.076-88.278-279.57-221.665-345.996z" fill="#E98F36" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960C262.4 960 64 761.6 64 512S262.4 64 512 64s448 198.4 448 448-198.4 448-448 448z m0-832c-211.2 0-384 172.8-384 384s172.8 384 384 384 384-172.8 384-384-172.8-384-384-384z m185.6 486.4H544v96c0 12.8-12.8 25.6-32 25.6s-32-12.8-32-25.6v-96H326.4c-12.8 0-25.6-12.8-25.6-32s12.8-32 25.6-32h160v-57.6H384c-12.8 0-25.6-12.8-25.6-32 0-12.8 12.8-25.6 25.6-25.6h76.8l-89.6-102.4c-12.8-6.4-6.4-19.2 12.8-32 12.8-12.8 32-19.2 38.4-6.4l89.6 96 89.6-96c6.4-12.8 25.6-6.4 38.4 6.4 12.8 12.8 19.2 25.6 12.8 38.4l-89.6 96H640c12.8 0 25.6 12.8 25.6 32s-12.8 32-25.6 32h-96v57.6h160c12.8 0 25.6 12.8 25.6 32-6.4 12.8-19.2 25.6-32 25.6z" fill="#bf2071" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qianbao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M899.475 379.618H402.78c-27.275 0-49.387-22.113-49.387-49.384 0-27.273 22.111-49.385 49.387-49.385h496.695c27.271 0 49.387 22.111 49.387 49.385-0.001 27.271-22.116 49.384-49.387 49.384zM750.18 570.166h-80.361c-27.279 0-49.391-22.113-49.391-49.384 0-27.274 22.111-49.384 49.391-49.384h80.361c27.27 0 49.385 22.109 49.385 49.384-0.001 27.271-22.116 49.384-49.385 49.384z" fill="#F29F27" ></path>' +
    '' +
    '<path d="M809.217 889.805H124.516c-27.272 0-49.383-22.111-49.383-49.385V183.58c0-27.273 22.11-49.385 49.383-49.385h774.958c27.271 0 49.387 22.111 49.387 49.385 0 27.278-22.115 49.387-49.387 49.387H173.907v558.068h635.31c22.539 0 40.873-18.334 40.873-40.864V330.234c0-27.273 22.115-49.385 49.385-49.385 27.271 0 49.387 22.111 49.387 49.385v419.937c-0.001 76.994-62.643 139.634-139.645 139.634z" fill="#F4C225" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1016.832 606.208q2.048 12.288-1.024 29.696t-10.24 35.328-17.408 32.256-22.528 20.48-21.504 6.144-20.48-4.096q-10.24-3.072-25.6-5.632t-31.232-1.024-31.744 6.656-27.136 17.408q-24.576 25.6-28.672 58.368t9.216 62.464q10.24 20.48-3.072 40.96-6.144 8.192-19.456 16.896t-29.184 15.872-33.28 11.264-30.72 4.096q-9.216 0-17.408-7.168t-11.264-15.36h-1.024q-11.264-31.744-38.4-54.784t-62.976-23.04q-34.816 0-62.976 23.04t-39.424 53.76q-5.12 12.288-15.36 17.92t-22.528 5.632q-14.336 0-32.256-5.12t-35.84-12.8-32.256-17.92-21.504-20.48q-5.12-7.168-5.632-16.896t7.68-27.136q11.264-23.552 8.704-53.76t-26.112-55.808q-14.336-15.36-34.816-19.968t-38.912-3.584q-21.504 1.024-44.032 8.192-14.336 4.096-28.672-2.048-11.264-4.096-20.992-18.944T79.36 674.304 67.584 637.44t-2.048-31.232q3.072-22.528 20.48-28.672 30.72-12.288 55.296-40.448t24.576-62.976q0-35.84-24.576-62.464t-55.296-38.912q-9.216-3.072-15.36-14.848t-6.144-24.064q0-13.312 4.096-29.696t10.752-31.744 15.36-28.16 18.944-18.944q8.192-5.12 15.872-4.096t16.896 4.096q30.72 12.288 64 7.68t58.88-29.184q12.288-12.288 17.92-30.208t7.168-35.328 0-31.744-2.56-20.48q-2.048-6.144-3.584-14.336t1.536-14.336q6.144-14.336 22.016-25.088t34.304-17.92 35.84-10.752T409.6 0q13.312 0 20.992 8.704t10.752 17.92q11.264 27.648 36.864 48.64t60.416 20.992q35.84 0 63.488-19.968T641.024 25.6q4.096-8.192 12.8-16.896T671.744 0q14.336 0 31.232 4.096t33.28 11.264 30.208 18.432 22.016 24.576q5.12 8.192 3.072 17.92t-4.096 13.824q-13.312 29.696-8.192 62.464t29.696 57.344 60.416 27.136 66.56-11.776q8.192-5.12 19.968-4.096t19.968 9.216q15.36 14.336 27.136 43.52t15.872 58.88q2.048 17.408-5.632 27.136t-15.872 12.8Q965.632 384 943.104 412.16t-22.528 64q0 34.816 18.944 60.928t49.664 37.376q7.168 4.096 12.288 8.192 11.264 9.216 15.36 23.552z m-476.16 92.16q46.08 0 87.04-17.408t71.168-48.128 47.616-71.168 17.408-86.528-17.408-86.528-47.616-70.656-71.168-47.616-87.04-17.408-86.528 17.408-70.656 47.616-47.616 70.656-17.408 86.528 17.408 86.528 47.616 71.168 70.656 48.128 86.528 17.408z" fill="#8A8A8A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.881 249.91c-122.036-122.092-319.94-122.092-442.033 0s-122.093 319.997 0 442.033c56.558 56.574 134.7 91.567 221.017 91.567 86.316 0 164.458-34.994 221.016-91.567 56.575-56.558 91.568-134.701 91.568-221.017s-34.994-164.458-91.567-221.016zM181.8 759.992c-74.01-73.991-119.787-176.22-119.787-289.14C62.013 245.05 245.063 62 470.865 62c225.803 0 408.852 183.05 408.852 408.852 0 112.92-45.778 215.149-119.787 289.139-73.985 73.966-176.183 119.713-289.065 119.713-112.883 0-215.08-45.747-289.065-119.713z m763.717 185.587c-10.099 10.115-24.058 16.372-39.48 16.372s-29.381-6.257-39.479-16.371l-78.903-78.959c-10.097-10.097-16.342-24.045-16.342-39.452 0-30.814 24.98-55.792 55.792-55.792 15.406 0 29.355 6.245 39.452 16.341l78.958 78.903c10.142 10.087 16.418 24.05 16.418 39.479s-6.277 29.393-16.416 39.477z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kuaidi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M640.212 215.276c22.716 10.932 30.015 30.262 29.862 53.973-0.201 31.367 0.333 62.74-0.2 94.098-0.21 12.324 4.455 16.722 16.657 16.541 33.849-0.5 67.715 0.18 101.566-0.272 19.577-0.262 35.348 5.39 48.614 20.867 13.889 16.202 29.7 30.837 45.388 45.387 10.932 10.138 16.306 21.329 16.178 36.64-0.558 66.713-0.156 133.432-0.274 200.15-0.053 30.366-13.067 44.907-43.365 47.263-10.142 0.79-11.85 6.469-13.467 14.357-11.31 55.124-65.103 84.347-116.354 62.868-27.245-11.418-43.788-32.594-49.247-61.392-2.355-12.432-7.82-15.94-20.014-15.86-75.677 0.49-151.359 0.382-227.037 0.101-10.996-0.041-16.544 2.059-18.63 14.895-6.368 39.2-40.51 68.006-78.89 68.884-41.86 0.957-76.62-24.45-85.606-64.383-3.054-13.571-7.273-20.136-22.77-20.198-16.94-0.068-30.76-15.234-34.4-32.475-3.327-15.763-2.129-31.724-2.049-47.635 0.04-7.84 3.89-12.008 11.855-12.135 3.485-0.055 6.968-0.172 10.452-0.182 22.481-0.065 22.478-0.058 22.892 21.868 0.112 5.956-0.183 11.937 3.076 17.399 7.013 11.76 17.119 12.644 25.847 2.14 36.682-44.148 96.428-44.575 133.093-0.618 5.23 6.27 10.512 9.484 18.857 9.453 65.72-0.245 131.445-0.347 197.164 0.065 11.817 0.075 15.452-4.145 15.427-15.68-0.293-126.962-0.11-253.926-0.266-380.889-0.029-23.585-9.282-32.546-32.515-32.558a316887.98 316887.98 0 0 0-328.609 0.004c-21.796 0.012-29.816 6.845-31.808 28.61-0.852 9.298-4.015 12.913-13.536 13.336-32.58 1.451-32.295 1.739-32.195-30.653 0.074-23.708 7.19-43.04 29.906-53.972 141.465 0.003 282.932 0.003 424.398 0.003z m193.16 241.938c-6.974-5.575-15.116-10.188-20.67-16.932-10.19-12.376-22.276-16.155-37.95-15.497-26.338 1.106-52.755 0.297-79.14 0.304-25.555 0.006-25.57 0.01-25.573 24.886-0.008 71.188-0.006 142.375 0.006 213.562 0 4.48 0 8.963 0.202 13.436 0.186 4.103 0.876 8.118 5.823 9.203 4.148 0.91 7.976 0.12 10.923-3.13 2-2.207 3.71-4.675 5.625-6.963 30.965-37.007 84.931-41.513 121.386-9.886 5.208 4.518 9.357 10.265 13.93 15.5 5.832 6.681 13.5 5.738 20.803 4.452 6.683-1.174 5.779-7.248 5.785-12.077 0.07-55.755-0.097-111.51 0.178-167.264 0.05-9.898-4.046-13.072-13.426-12.879-17.912 0.37-35.84 0.159-53.758-0.104-8.33-0.122-14.798-3.784-15.747-12.735-1.03-9.723 5.128-14.75 13.792-16.438 5.8-1.13 11.87-0.84 17.814-1.246 8.799-0.6 17.773 1.422 29.997-6.192zM287.77 730.04c0.153 22.024 18.285 40.36 39.566 40.012 21.82-0.356 39.835-18.344 40.104-40.04 0.284-22.917-17.135-39.788-40.81-39.531-23.427 0.255-39.022 16.13-38.86 39.559z m471.422-39.56c-23.34-0.312-40.28 15.381-40.795 37.796-0.52 22.616 17.286 41.383 39.524 41.655 21.37 0.261 39.772-17.954 40.106-39.704 0.35-22.608-16.1-39.443-38.835-39.747z" fill="#999999" ></path>' +
    '' +
    '<path d="M132.128 499.206c6.405-5.491 13.89-6.878 22.177-6.86 71.077 0.155 142.155 0.064 213.233 0.15 4.423 0.005 9.078 0.166 13.212 1.516 6.217 2.033 9.524 6.942 9.394 13.701-0.117 6.089-2.967 10.878-8.741 12.545-5.645 1.63-11.681 2.637-17.548 2.652-68.592 0.18-137.184 0.072-205.777 0.175-9.8 0.015-18.792-1.615-25.95-8.936v-14.943z m128.766-47.072c-13.905 0-27.81-0.025-41.714 0.008-9.693 0.023-17.058-3.745-17.506-14.104-0.413-9.547 6.41-14.614 15.146-15.247 29.722-2.149 59.513-2.185 89.226 0.002 8.67 0.639 15.15 6.052 14.538 15.732-0.615 9.748-7.541 13.406-16.488 13.508-14.399 0.165-28.801 0.044-43.202 0.044v0.057zM209.697 383c-11.39 0-22.791 0.325-34.164-0.104-8.974-0.34-15.564-5.04-15.811-14.425-0.248-9.38 6.316-15.093 14.994-15.357 22.75-0.691 45.548-0.65 68.299 0.019 8.776 0.258 14.96 5.857 14.863 15.387-0.099 9.73-6.51 14.116-15.499 14.451-10.88 0.406-21.786 0.097-32.681 0.097l-0.001-0.068z m16.159 208.844c-9.947 0-19.937 0.58-29.826-0.172-8.793-0.67-15.58-5.675-15.358-15.11 0.216-9.258 6.839-14.533 15.77-14.757 19.883-0.498 39.793-0.458 59.68-0.035 8.86 0.188 15.806 4.83 16.003 14.36 0.212 10.293-7.005 15.08-16.433 15.665-9.91 0.615-19.886 0.139-29.835 0.139l-0.001-0.09z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuiguang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M178.26 474.658C172.426 609.364 301.214 605.46 301.214 605.46l3.903 197.125 33.206 21.454h89.79l21.45-27.286V613.31h62.461V316.567H318.761s-134.624 23.467-140.5 158.091zM552.953 316.567h58.603v298.67h-58.603v-298.67zM804.818 189.712c-23.468 1.934-150.28 105.406-150.28 105.406V640.55s119.049 80.053 144.363 97.642c25.395 17.545 39.121-23.466 39.121-23.466V219.013s-9.738-31.232-33.204-29.301z" fill="#BF2071" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuiguang1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M902.182 828.756L651.351 662.131H428.388v222.157c0 30.691-24.954 55.558-55.741 55.558h-83.61c-30.78 0-55.74-24.867-55.74-55.558V662.131c0-1.834 0.367-3.53 0.539-5.296-96.389-18.381-167.761-85.444-167.761-189.132 0-122.69 99.826-194.405 222.962-194.405h362.314l250.831-166.625c30.793 0 55.742 24.867 55.742 55.535v611.014c-0.001 30.666-24.95 55.533-55.742 55.533z m-613.144 27.778c0 15.335 12.48 27.756 27.871 27.756h27.87c15.396 0 27.869-12.421 27.869-27.756V662.131h-83.611v194.403z m0-527.676c-57.234-1.834-167.221 16.158-167.221 138.847 0 122.712 111.82 138.871 167.221 138.871h222.961V328.858H289.038z m362.314 219.981v-4.582-48.773-27.778-138.847h-83.611v277.718h83.611V548.84z m250.83 154.937V231.655 162.21L707.093 301.079v333.273l195.088 138.871 0.001-69.446z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weizhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M525.609 987.29c-58.402 0.287-351.044-438.221-351.044-585.004 0-193.913 157.133-351.044 351.044-351.044 193.802 0 350.99 157.133 350.99 351.044 0 144.72-293.559 585.285-350.99 585.004z m0-877.53c-161.539 0-292.529 130.991-292.529 292.529 0 122.295 243.965 497.425 292.529 497.198 47.879 0.229 292.474-376.559 292.474-497.198 0.057-161.595-130.933-292.529-292.474-292.529z m0 438.795c-80.767 0-146.322-65.498-146.322-146.266 0-80.825 65.554-146.266 146.322-146.266s146.266 65.439 146.266 146.266c0 80.767-65.498 146.266-146.266 146.266z m0-234.013c-48.508 0-87.747 39.299-87.747 87.747s39.299 87.69 87.747 87.69c48.449 0 87.69-39.299 87.69-87.69 0-48.508-39.238-87.747-87.69-87.747z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qianbao1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M154.149 281.724h726.55v636.233h-726.55z" fill="#F4BD45" ></path>' +
    '' +
    '<path d="M585.691 476.665h290.136v226.743H585.691z" fill="#F8AB48" ></path>' +
    '' +
    '<path d="M865.66 236.105h-14.87V133.317c0-29.747-24.342-54.096-54.089-54.096H163.76c-29.748 0-54.097 24.35-54.097 54.096v757.358c0 29.747 24.35 54.097 54.097 54.097h701.893c29.755 0 54.096-24.35 54.096-54.097V290.202c0.008-29.755-24.334-54.097-54.089-54.097z m-68.959-101.427v102.78H163.76v-32.46h434.132c9.464 0 17.576-8.112 17.576-17.584s-8.112-17.584-17.576-17.584H163.76v-33.814H796.7v-1.338z m68.96 757.358H163.76V291.555h701.893v163.642H596.539a36.352 36.352 0 0 0-36.506 36.506v201.516a36.36 36.36 0 0 0 36.506 36.513H865.66v162.304z m0-200.17H596.538V490.364H865.66v201.502zM680.388 203.644h50.038c9.464 0 17.583-8.111 17.583-17.583 0-9.465-8.119-17.584-17.583-17.584h-50.038c-9.464 0-17.59 8.12-17.59 17.584 0 9.472 8.133 17.583 17.59 17.583z m-27.048 386.794a41.918 41.918 0 1 0 83.837 0 41.925 41.925 0 0 0-41.926-41.925 41.925 41.925 0 0 0-41.91 41.925z" fill="#3D4645" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenti" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M790.945792 234.432512H233.04704c-57.854976 0-104.629248 46.846976-104.629248 104.593408v331.270144c0 57.781248 46.774272 104.629248 104.629248 104.629248h259.93216L721.197056 931.84V774.926336h69.748736c57.788416 0 104.636416-46.848 104.636416-104.629248V339.026944c-0.001024-57.746432-46.848-104.594432-104.636416-104.594432zM555.981824 683.99104H452.747264v-90.980352h103.23456v90.980352z m84.1472-230.126592c-8.001536 13.330432-24.230912 29.666304-48.75776 48.907264-17.033216 13.505536-27.7504 24.37632-32.303104 32.559104-4.407296 8.22784-6.687744 18.878464-6.687744 32.057344h-96.256v-9.621504c0-16.408576 1.836032-29.696 5.57568-39.906304 3.674112-10.244096 9.177088-19.566592 16.598016-28.012544 7.341056-8.443904 23.786496-23.314432 49.490944-44.608512 13.657088-11.160576 20.554752-21.361664 20.554752-30.656512 0-9.286656-2.788352-16.518144-8.219648-21.659648-5.511168-5.17632-13.809664-7.747584-24.97024-7.747584-12.039168 0-21.950464 3.965952-29.805568 11.892736-7.857152 7.972864-12.8512 21.813248-15.059968 41.563136l-98.312192-12.156928c3.376128-36.159488 16.446464-65.230848 39.354368-87.296 22.907904-22.029312 58.007552-33.081344 105.29792-33.081344 36.856832 0 66.596864 7.711744 89.286656 23.090176 30.692352 20.781056 46.107648 48.466944 46.107648 83.122176 0 14.35648-3.964928 28.194816-11.89376 41.554944z" fill="#1296DB" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wodedingdan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M758.052 47.197H265.951c-38.439 0-75.217 31.163-75.217 69.612v666.933c0 38.446 36.778 75.234 75.217 75.234h367.115l195.103-211.68 5.096-12.3V116.81c0-38.45-36.774-69.613-75.213-69.613z m-439.905 188.62h387.709v46.045H318.147v-46.045z m178.911 359.297h-178.91v-46.04h178.91v46.04z m0-104.417h-178.91v-46.04h178.91v46.04z m-178.91-104.418v-46.04h387.708v46.04H318.147z m300.711 403.355V661.92c0-19.222 15.578-34.804 34.793-34.804h117.536L618.859 789.634z" fill="#D4237A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xitongxiaoxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M834.616 695.999c-51.445 0-51.445-51.485-51.445-51.485V389.527c0-113.014-91.64-204.651-204.662-204.651H439.103c-113.042 0-204.661 91.637-204.661 204.65v254.99s0 51.484-51.425 51.484c-51.445 0-51.445 51.405-51.445 51.405v51.445H886.041v-51.445s0-51.406-51.425-51.406zM407.685 143.942h202.221c22.626 0 40.934-18.328 40.934-40.932 0-22.624-18.308-40.932-40.934-40.932H407.685c-22.585 0-40.934 18.308-40.934 40.932 0 22.605 18.35 40.932 40.934 40.932zM508.797 962.58c67.833 0 122.796-54.964 122.796-122.798H386c-0.001 67.834 54.982 122.797 122.797 122.797z" fill="#D4237A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tijiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M912.023 257.807L701.079 45.177c-8.433-7.77-19.517-12.108-30.961-12.108h-527.18c-25.238 0-45.718 20.48-45.718 45.719V927.02c0 25.239 20.48 45.719 45.718 45.719h289.01V772.457h-138.06c-13.493-13.492-13.493-35.358 0-48.91l195.403-214.438c13.433-13.493 35.298-13.493 48.73 0l195.585 214.437c13.432 13.493 13.432 35.358 0 48.911h-138.06V972.74h285.516c25.238 0 45.718-20.48 45.718-45.719V291.48c0-12.77-5.3-24.998-14.757-33.672z m-61.862 71.319H645.662c-5.662 0-10.24-4.578-10.24-10.18V114.447c0-9.095 11.023-13.673 17.408-7.228L857.33 311.718c6.505 6.385 1.927 17.408-7.168 17.408z" fill="#D4237A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-you" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M207.856 928l415.84-416-415.84-416L303.984 0.16 816.144 512l-512.192 511.84L207.856 928z" fill="#BF2071" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-you1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M207.856 928l415.84-416-415.84-416L303.984 0.16 816.144 512l-512.192 511.84L207.856 928z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xitongxiaoxi1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M592.214 162.916c-6.193-12.74-19.214-21.541-34.34-21.541-9.545 0-18.266 3.532-24.963 9.333L263.884 270.214s-160.196-0.758-162.027-0.758c-21.078 0-38.203 17.09-38.203 38.158l0.174 383.024c0 19.81 15.076 36.104 34.405 38.008 1.32 0.14 81.696-0.16 81.696-0.16 21.08 0 38.204-17.108 38.204-38.204 0-21.1-17.123-38.204-38.204-38.204l-39.53 0.18-0.299-305.905 129.708 0.283c5.616 0 10.927-1.245 15.732-3.422 3.564-1.213 234.162-104.41 234.162-104.41l0.307 521.115-190.84-88.572c-17.012-12.462-40.929-8.748-53.386 8.283-12.461 17.033-8.733 40.929 8.283 53.39l251.621 117.207c17.047 12.464 40.92 8.75 53.382-8.262 2.568-3.504 5.687-11.437 5.717-11.532 0.32-1.06 1.294-5.859 1.4-6.798 0.049-0.43-0.107-638.25-0.107-638.25a38.042 38.042 0 0 0-3.865-22.469zM705.262 303.61a38.361 38.361 0 0 0-13.11-11.53 38.038 38.038 0 0 0-17.955-4.487c-21.082 0-38.21 17.109-38.21 38.206l0.378 3.548c0 9.774 3.698 18.666 9.743 25.423 0 0.005 0.005 0.01 0.005 0.01a38.197 38.197 0 0 0 6.413 5.738c37.192 34.855 60.468 84.388 60.468 139.383 0 53.362-21.896 101.584-57.169 136.24a38.397 38.397 0 0 0-12.92 11.618c0 0.005 0 0.005-0.005 0.005-4.338 6.197-6.535 25.41-6.535 25.41 0 21.101 17.08 38.208 38.201 38.208 7.346 0 14.187-2.115 20.02-5.714a38.377 38.377 0 0 0 9.787-8.636c53.002-49.067 86.22-119.207 86.22-197.13 0.002-77.486-32.852-147.261-85.33-196.292z" fill="#D4237A" ></path>' +
    '' +
    '<path d="M803.59 199.724c-20.322-11.319-47.312-6.153-60.585 11.426-13.23 17.585-7.405 41.244 12.787 52.825 4.763 2.717 117.734 69.455 117.734 235.496 0 166.426-108.342 233.203-112.663 235.764-20.284 11.73-25.749 35.433-12.216 53.012 8.468 11.056 22.491 17.011 36.733 17.011 8.38 0 16.888-2.098 24.426-6.421 6.177-3.554 151.906-90.167 151.906-299.365 0.002-209.62-151.637-296.157-158.121-299.748z" fill="#D4237A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhengcejiedu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.569 957.424h-46.231V63.044h46.23c25.524 0 46.205 20.707 46.205 46.257v801.867c0 25.545-20.68 46.256-46.204 46.256z m-631.74-46.257V864.92h77.039c51.048 0 92.44-41.44 92.44-92.53 0-51.092-41.393-92.532-92.44-92.532h-77.039v-77.103h77.039c51.048 0 92.44-41.422 92.44-92.514 0-51.1-41.393-92.53-92.44-92.53h-77.039v-77.104h77.039c51.048 0 92.44-41.405 92.44-92.504 0-51.118-41.393-92.527-92.44-92.527h-77.039v-46.274c0-25.55 20.686-46.256 46.21-46.256h493.068v894.38H265.039c-25.524-0.001-46.21-20.712-46.21-46.258zM342.1 248.102c0 25.554-20.707 46.256-46.231 46.256h-123.27c-25.523 0-46.23-20.702-46.23-46.256 0-25.55 20.706-46.274 46.23-46.274h123.27c25.523 0 46.23 20.725 46.23 46.274z m-169.5 215.882h123.269c25.523 0 46.23 20.703 46.23 46.257 0 25.545-20.706 46.265-46.23 46.265h-123.27c-25.523 0-46.23-20.72-46.23-46.265 0-25.554 20.707-46.257 46.23-46.257z m0 262.139h123.269c25.523 0 46.23 20.72 46.23 46.265s-20.706 46.257-46.23 46.257h-123.27c-25.523 0-46.23-20.71-46.23-46.257s20.707-46.265 46.23-46.265z" fill="#1296DB" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxiliebiao_shangji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M832 640V512c0-38.4-25.6-64-64-64H512V320c70.4-12.8 128-76.8 128-160C640 70.4 569.6 0 480 0S320 70.4 320 160c0 76.8 57.6 140.8 128 160v128H192c-38.4 0-64 25.6-64 64v128C57.6 652.8 0 716.8 0 800c0 89.6 70.4 160 160 160s160-70.4 160-160c0-76.8-57.6-140.8-128-160V512h576v128c-70.4 12.8-128 76.8-128 160 0 89.6 70.4 160 160 160s160-70.4 160-160c0-76.8-57.6-140.8-128-160z" fill="#E98F36" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)