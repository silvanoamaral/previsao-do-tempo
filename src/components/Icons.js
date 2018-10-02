const icons = {
    sunny: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALySURBVGhD7ZlZyExhGMfHvmVfynqDC1uUspRbZUvIkrLcfC6kRKKQkuSC4krCneTSdmNJSijZixvcynJhS7KG/+858+Y1nZk553znfOdMnV/9Ms/bfGee/8w7533nVSkpaV26V/9taQbIN/KkVS3MFPlH3rSqhSmDFI1CBhkv+wQPI9OeICNlv+BhehDit3wshzIQkaRBlspv8rJVKdJbEoKm4oTpK+/JPVZFY4n8LnmtbQykDc37YYbItPFD7GUgK7IM02EhHDTvwjBtmtFfdg0e1mWm7NAQDsLclc+s+h8+tc3ymnwtae6HfC5Pyfmys/SZKwmy26qc4V2nkc+S5vGnfCnfeWP4UM6RhYPpc0W65o9LGvXf+YFyjSSEe16bLAzd5HVJc0yfybIRhNsqf0n+Zp0sBAckDb2QgxmIyErJIvtFTmAgT0bLr5JpMpGBmByRvAlnrcqRfZJGTlgVn0Hyo+STGcNAXrj1pD13oNOSa2y0KkWYLtPryN7J0UmyPjCtujCQkA2SIMes+sckGdbDVNn09dg6uxU2TBZBxzDJ2CurkrNYcp1zVgVwI/Bft1ZuMA3pKc/L+3X0V15+m3DR91YlZ7nkOmesCuAudkuG9XBHsjtIlU+SJvjSJmWn5BqHrMqJi5Im1lqVDN55rrHQqpxYL2nikazdCEZhtuTW+0H2YCAv2J6wohNmCwMx4Fen23cxvXJnnmTfhKsZiAAh3LR8Uq0LwXZJU0wTth0cldZjlmQq8vy3cpwsFCxsbg3ibsaKzRhf4hWS6XNbEpbnPJVjZe5Mq+rDxvGCdM2GybqzS/aSDk7sV8lGn2QmuIMCTtrDYJuzSR6VBOPTOSgXSRbdWpZJQmZ1OhOKf9qR1m9sfmFmdToTSpZHNv7pTKZhOMZMEmKGHB48bErmYbhFJgkxSvLFv2RVNPwwcf4uEiPkA7nDqugkPcQmzFV52KoCUP5HT9EogxQNtiwEuWFVC8PB9n65wKqSkpKcqFT+AuZ6464sku10AAAAAElFTkSuQmCC',
    rainy: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASvSURBVGhD7Zp5qFRVHMenfaHFKNpXzRZEKiOIaCHI9pTQbC9JgxJCyzYqiBbaINsICoqCjFLMpcS2P9KiNKhIW1SiFEttISuiff18Dvf3mDfM3Dfz3n3jfTBf+PDmd+beM2e75/x+v/sqbdAm2d8iNRNWwKBktUE7wlp4PFnF6DT4L+N+C2p1IfwCZyarGA0Hf/CtZPVdm8EnEB35HQZDl7aH9eCXX8BWUISK7sg4sL5P4Ynsc7fZvgMsDK6DIlR0R94H67sE9oW/4DfYDdID8xP8C1PAC7+FbaCvKrIjw8C6voEtLEAvgGVXadyQGS9poEWgfWWymtMecC7cB/PBHeU7+AesS36Fr+A9eAZuhOOg2WV8BlS3U10DlqWH/uPMGKmBxoL228lqrCFwMywDr2/EBnATqfed2ME5cB7krYL9wFXzI5wAQ8FBsY7xUPk5M7bVQI6utttmPTmK86B6tF2Kz8O14IAcBFtDrXaBI8CH9l54E1znUY+z6PPqdfX0KMS1wVLYEtLIW3A72Otpmb0AqnUouGyiAkfGHeNYcFvsrXaCi8El7Yhb9w9wE9QOxqZwNbwLy+Fh8KxKcpr+hmig/AFHgvJmdzH3bL/7Ghz57aBouTk8BzHbnhnOYNM6Gl6ElTAbDgPlaL0OVmpnH4CuEehH2Z4PwN/9E66AXst92umzMncbZ66dcov1OYrl5s7Ust+2N3wOVuAhtDtsLJ0DsawftKBZ7QC6AN64GPrjWWhVJ0F05hYLepJT5zPiDR9BO56HZjUK3AR8VvWAc3UZ2AldloMtKJnCJ9TBdSOqKx0vT2EvtENllOeVZ4ht1PutqzgIPSD7I6orSiMglpiHdDftCvo8duR4C0ouD03b+myyqnQ9+MU7ySq/DgfbqweyswWh2G4nJGtgKDzfFIuoA8ACvdC2ZSUKUMQiLycLTQQLPPwGkvQHbbexTgrOHssKjO6U3u6JoG/zGhh46XMZrj4CZ0FeVKfrrVvxJCyBz8A6dD7vBNd3nsyKTIVZoOOoq+SWOxecBQM6ZTsNJWx78pAjtDXKGgPV6ZZGeCBNhs2hWsYV66DePdXYqW5pHGRMbrwTTmIj3HpN0BkhuoosOx8qqzNDlyQu1tt1hk6BQzJOhrtgDcR1H4JTbIQ2PSsTB8MYJjwFR3Y0GIhFRKr3YJmH3G3gDmS554MhxeVwFNhhZ/EimAFxnUvqy+yzQVjX9Mj3MAkiS1FP/vAFEANghS47PxvZeb/TruplUfYCG2S5sYbLz8/OhIOxP+RpT3gKvCe4B7pi5oWg+96sTOr5fMVSWAXG6tXKSwe5bUYkaNTZaobzbHDgvN9YPk2rAUzeLOTJrIvJiNo1r3rKa10K5qb2SVbrsn6XYb8HfT11ZMCo05GyqdORsqnTkbKp05GyqdORsqnUHTHnZbR2d7LyVeqOmA+2cb5d7UnHgNe+kawSKuIAX9XlyXDY64zfS6mnwQYaWDWSL1f9LwqvM5NeShkJRuzs+/IIbUNmyl8FvzcDUvt9qeQ/4cRLVN+13wr+k8FD4Gtmy822HAil16kQr+hqeQVayQFsdJkKOh2M/U3gmRBv6ZVy31Wp/A+CT5G8Awh+XgAAAABJRU5ErkJggg==',
    stormy: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPtSURBVGhD7ZhbyGVjGIB/hhgUhpFDDUKUY8rpCrnQhCQkx0wJcUEY4zA5JE3OFw4zrsQFIYdQXIiMcrowIReOoXFWTuU04/A8/96v3n9Ze6/17b3T/9d66mnv9a31vmu9a3/r+761pzo6Ojo6OjrKmI/3Jt2ek2yJfyfdntVs2P+s0raQQfH/K5vjC3j29NZM2hRinPHmqbIRHorn4TK8FI/HbXCiePKX0Itcj6djpqkQjzfOfeaJYnyWrsEvMceHf+BjuA9OhL3xO4wTeFGn4AbonXsY8wW4bbv7PS6KUPOY7wD8qN/WpAVdhhNhf/wGI7kXtyZt1+n+XITx5jkEf+63hb/janwI7YJfY96vN+JE8CeuO0EbjTN+AX7Vb1MLvQltz/jcnIGfYc5zEk6EgzEn/hMfxBPQO+3Jn8B8jB6EcjdGm7/CcTiMHfFtjJgf8Tm0+ANxZK7DfCHHYh3VZ8PRaGf8JbVdjW3YE3/DiMs+jguxCOeBzzGSXIHDWIFx7Lr0Xb/FkhXALZjjs5+iN2kgj1R8BiPYOzRo4gvsFtUCwgewhJ3wYjwVL8E3MOd7FzfBWvKBVd/DJg7HvzDHOfzqEhyXizDnvxxryRdQ1VGoibcwjv8QD8MmShect2Ocwy7m3PUffECz+UHXPbAOh9JzMY5zZHMCbMP5/c+2bId5UNkdW/EORpDPTWYrXIWOZnGMtumG4oz/dO9rEe9jnOtNPAIbORPzRd6FdgfvxCf9tqovYxvuRweUUvI8o/YAF55DcdTIQepMvbbS5ozshd2MbbrLInRNNUohjmKvYz6/etNrOQ1zf6zTi3E0cYlRwh1o/CiFBA4meUnzPW6LM7C6XISj1m1YXfxdiKVsjZFnnEJkF/wJ43quxH9xfZWLcBUb7wjnYLT7UI/yFrgcI8e4hcgNGPlesSFzK7rDpcV+NvTxV4mgO20oxIEivx5MohBHrcj3gw1VrsfqfLASI8gVaSkXYMSrA8dVOGiOasNeGPlcSrXiWoygJ20o5FWM+Kq+mFmUk14JJ2LkcEXRiiMxgpwId8US5uFR6ESau1josn97LOF5jPj7bGiDw+zHGIGvoaPQKFiUc0LkUv/wKyH3EG01ywcnYw52LPevnd3QoprcDINjMPI4Q+e10xZYF78DHo3PYr6Op7CYYS8+Td6DQS7kURv6bIpfYI4bplOBRY7EUvwV6xIPc1Ah/gcQ+AvnmGH6Tj/2n3uumZxzvCMuV+pOVLWukBent3r47HyA1bis85urcbvYxHGWr/bnOuuekcXTWz2a8tjtZh0W4rK89k1vLmEhZ/W+zm32xY17Xzs6Ojo65ixTU/8Aj0fsbZiYlzYAAAAASUVORK5CYII=',
    partly_cloudy: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO+SURBVGhD7ZhbqBVVGIB3WmqW9wuUECheEUuTUCQiQSqCIEHREnwQfRAvD0WQCPqiIqaoVEqpL/qQRFRED5Ig+GD1EF4SNSPEC6gpVpRGF7W+b52zYNjuM3vvOWf2eGA++PD8a4+zLrPWv9ZMpaTk/qVX+7/dmt54AT8JUTfmCfwP7Uy3puxIK3gQ5+GwEKXTbEeewhfa/syf2WjjzuIIC1KIHTkfonRm4S28i0MsyJv+eBwb6Yyp9whuCVHHxE54z10WtIqh2Ghn6pHsxB7sgS0l2ZkfsA/W4lF8qO3Pe5iChXYiYmeO4q84wIJ2ZuJePIe38R+0s+/jkxh5EV0TH2JhnYiYxRx1GYSfoyMcvYp2NMY2/F2MR5fB7f/eN/h0TqONNd0uwoEYGYkb8C/0mlewmp74ODoghXEAbeBhTGvIJFyNfUNUqYzBjegg3MH45P7AL3E++tRbwsto5Zew0dF8GN/DfzE2/m+8iD8nyvQMTsPc+QytcGmI6vMYfoex8a4ZG5pc8K6dBWgy8ToTxmuYGXfZUTV8BCO/oJUND1E6TqnYiZM4FtN4AN9Es59mPsLEPF+te4g4RYxvhqg+O9Hrv8dkyq6HT8eM57TLlAy+QEew2k0oTgenh3O9o40vMh69zsw12oIm2YEOgskhF1yMVjA5RB2zGb1uW4iaxxT/J15HB83ZMA5N2abuTvMO2kBHLI0f0eumhigb+9F7nMBkxnMJfIovYWacJnExPm9BDXx/jxW6gLOyDGPjb6BrzZRt3bH8IDaSeGryNnoTjyOvWlBFfDf5KUTZMU1vRQ+cSZx2y/EyWo/vQNbZNI7yB+hNzC5zMIkV+du1EOWH+88htC6nn+uoIVzgyUYvwVP4XIjaRvAjdIF6c+2HeeJe5ZSzrlUW1CP5UlQ9J03Lvhn6dPz9dzyGpu562a0rmI7W7Wad+pEw2QnfM6oxxfqbC3IhFvHF8Vu0DR2eBpKd8KWoOguZufztN5xgQUH42mA7TET3MBFjJ3ZjrVTqacDfV4SoOMxitmN7iKp4Bj2SmKFqdcIyd1/zevLFqgjeQjuyPkQ1SDtTeVr2P18JUbHsQ9tiJm2auIN7Gi7yg4Ip3oxl5sq0MUo8RM4IUTHEhf5ViDKyBr2JO2yXnEqbxM+68ez3tAVZ8bOq7+92xu9bDR8TOon1rMV4gFyJncajifuIN/Tz0Dp8Hefm4GJ0U44HRjvyBnYZbobfoDdvlV9jLl9c3FeeRZ+I6fDjHPRpuGe4WZeUlJSUlJTUplL5H9C2LV6Z4pE0AAAAAElFTkSuQmCC'
}

export default icons;

/*
 Ref icons: https://icons8.com/icon/set/weather/all
*/