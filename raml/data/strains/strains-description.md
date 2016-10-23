### Strain object

<small>Cannabis strains in the Cannabis Reports system.</small>
<hr>

Cannabis strains are the various cultivars available for the cannabis
family. Thousands of years of human domestication and breeding of cannabis
strains have resulted in a huge variety of attributes that we know and love
today.

[http://en.wikipedia.org/wiki/Cultivar](http://en.wikipedia.org/wiki/Cultivar)

Over time, strain names have been used by various companies in their
attempts to recreate the results of other breeders. Cannabis Reports
identifies strains not only by their name, but by their seed company as
well, to ensure they are all properly represented.

### Strain Attributes
<hr>

<table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td><code>string</code></td>
      <td>Name of the cannabis strain.</td>
    </tr>
    <tr>
      <td>ucpc</td>
      <td><code>string</code></td>
      <td>UCPC code for this strain.</td>
    </tr>
    <tr>
      <td>link</td>
      <td><code>url</code></td>
      <td>Link to the strain in the Cannabis Reports API.</td>
    </tr>
    <tr>
      <td>qr</td>
      <td><code>url</code></td>
      <td>Link to the QR code for this strain.</td>
    </tr>
    <tr>
      <td>url</td>
      <td><code>url</code></td>
      <td>Link to the strain listing on the Cannabis Reports website.</td>
    </tr>
    <tr>
      <td>image</td>
      <td><code>url</code></td>
      <td>Link to the full size image for this strain on Cannabis
      Reports.</td>
    </tr>
    <tr>
      <td>seedCompany</td>
      <td><code>object</code></td>
      <td>Information about the seed company that created or provides the
      strain.</td>
    </tr>
    <tr>
      <td>seedCompany.name</td>
      <td><code>string</code></td>
      <td>Name of the seed company for the strain.</td>
    </tr>
    <tr>
      <td>seedCompany.ucpc</td>
      <td><code>string</code></td>
      <td>UCPC for the seed company.</td>
    </tr>
    <tr>
      <td>seedCompany.link</td>
      <td><code>url</code></td>
      <td>Link to the seed company for the strain in the Cannabis Reports
      API.</td>
    </tr>
    <tr>
      <td>genetics</td>
      <td><code>object</code></td>
      <td>Object that holds information about the genetics for the
      strain.</td>
    </tr>
    <tr>
      <td>genetics.names</td>
      <td><code>string</code></td>
      <td>The textual representation of the genetics for a strain.</td>
    </tr>
    <tr>
      <td>genetics.ucpc</td>
      <td><code>string</code></td>
      <td>The genetics of a strain with UCPC codes instead of names.
      Delimiters in the genetic string are parentheses (), lower case "x",
      common slash /, and question mark ?. These characters will never be
      included within the UCPC.</td>
    </tr>
    <tr>
      <td>genetics.link</td>
      <td><code>url</code></td>
      <td>Link to the genetics for the strain in the Cannabis Reports
      API.</td>
    </tr>
    <tr>
      <td>lineage</td>
      <td><code>object</code></td>
      <td>Countries of origin for the genetics for the strain. Object keys
      are the country name and the values are the two character country
      codes.</td>
    </tr>
    <tr>
      <td>children</td>
      <td><code>object</code></td>
      <td>Object that holds information about the children for the
      strain.</td>
    </tr>
    <tr>
      <td>children.count</td>
      <td><code>integer</code></td>
      <td>Number of strains this one has been bred into.</td>
    </tr>
    <tr>
      <td>children.link</td>
      <td><code>url</code></td>
      <td>Link to the children for the strain in the Cannabis Reports
      API.</td>
    </tr>
    <tr>
      <td>reviews</td>
      <td><code>object</code></td>
      <td>Object that holds information about the reviews for the
      strain.</td>
    </tr>
    <tr>
      <td>reviews.count</td>
      <td><code>integer</code></td>
      <td>Number of reviews for the strain.</td>
    </tr>
    <tr>
      <td>reviews.link</td>
      <td><code>url</code></td>
      <td>Link to the reviews for the strain in the Cannabis Reports
      API.</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td><code>object</code></td>
      <td>Object containing two strings, "dateTime" and the "timezone" when
      the strain was added.</td>
    </tr>
    <tr>
      <td>updatedAt</td>
      <td><code>object</code></td>
      <td>Object containing two strings, "dateTime" and the "timezone" when
      the strain was updated.</td>
    </tr>
  </tbody>
</table>

### Where's Indica, Sativa, Hybrid?
<hr>

Mainstream cannabis science does not subscribe to what has become a common
classification scheme for identifying cannabis strains. There are differing
opinions on the appropriate taxonomy of cannabis in the scientific
community. Until there is consensus, Cannabis Reports does not participate
in this type of classification.

Cannabis consumers have become used to associating feelings to these words
which were previously used to describe physical or genetic characteristics
of a plant.

To this effect, we have given producers the ability to classify their
products as indica, sativa, and hybrid as it has become part of the common
vocabulary. We have also allowed for strains to be listed on menus in ways
that consumers have grown accustomed to, with most strains ending up in the
"hybrid" category.

### Where are the THC, CBD, and Other Percentages for Strains?
<hr>

Results from cannabis labs on the percentage of THC and CBD content are
based upon samples of the overall harvest for particular strains.

The cannabis plant contains hundreds of chemicals that interact together to
provide the experience you have when you consume it. Science has shown that
genetics of a strain can determine whether the disposition exists to produce
the chemicals we measure for. However, the overall abundance of them in what
you are consuming can vary depending on many factors:

1. Skill of producer.
2. Environment.
3. Genetic phenotypes from seeds.
4. Part of plant consumed.
5. Processing.

Cannabis Reports lets producers tie lab tests to individual products,
batches of products, or flowers. For the overall information of a cannabis
strain, however, we recognize that the actual results can vary from crop to
crop.

### Explore Strain Endpoints
<hr>
<small>Here are some of the results available from the different strain
  endpoints</small>

<table class="table table-bordered table-hover">
  <tbody>
    <tr>
      <th>
        Endpoint
      </th>
      <th>
        Result
      </th>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of strains with optional sorting.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains/search/:query</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Returns search results for strains in our database.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains/:ucpc</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets an individual strain based on the UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains/:ucpc/reviews</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the reviews for a cannabis strain.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains/:ucpc/effectsFlavors</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the average effects and flavors from reviews for this strain.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains/:ucpc/seedCompany</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the seed company that was responsible for a cannabis strain.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains/:ucpc/genetics</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the strains that were the parent material for the strain with the given UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains/:ucpc/children</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the child strains that this one has been bred into.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/strains/:ucpc/availability/geo/:lat/:lng/:radius</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets information about the availability of a strain using latitude and longitude.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>
