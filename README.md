population-choropleth
---------------------

Make a census population choropleth map.

Calculating the block areas is slow: about 20 minutes for the 400K
populated blocks in California. I don't know how much of that is
parsing the JSON and how much is the actual area calculation.

After that, the tiling part is almost trivial.

    $ curl -O http://www2.census.gov/geo/tiger/TIGER2010BLKPOPHU/tabblock2010_06_pophu.zip
    $ java shpcat -j tabblock2010_06_pophu.zip > tabblock2010_06_pophu.json
    $ node area.js | ../tippecanoe/tippecanoe -f -o population.mbtiles -y density
