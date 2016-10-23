### Edible Object

<small>Cannabis edibles in the Cannabis Reports system.</small>

<hr>

Cannabis edibles cover a wide variety of consumable products that contain cannabis in various forms. From cotton candy, to tinctures, to dog treats, and everything in between. If it's a form of cannabis that is meant to be consumed, we categorize it as an edible.

The main forms of edibles that Cannabis Reports recognizes are:

- Baked Goods
- Candy
- Treat
- Chocolate
- Snack
- Beverage
- Pill
- Tincture

We also support "Other" types of edibles. Some examples are:

- Butter
- Honey
- Breath Strips
- Tea
- Ice Cream

Producers measure the amount of cannabis in their edibles in a variety of ways.
We recognize 4 ways for measuring the cannabis contents:

- THC mg
- CBD mg
- Cannabis mg
- Hash Oil mg

More information about cannabis edibles can be found in our FAQ here:

https://www.cannabisreports.com/faq/typesconsumption/what-is-a-cannabis-edible

<table class="table table-bordered table-hover">
  <tbody>
    <tr>
      <th>
        Name
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
    </tr>
    <tr>
      <td>
        <div>
          <p>name</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Name of the edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>ucpc</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p><a>UCPC</a> code for this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the edible in the Cannabis Reports API.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>qr</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the QR code for this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>barcode</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the barcode for this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>url</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the edible listing on the Cannabis Reports website.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>image</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the full size image for this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>producer</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Information about the <a>producer</a> that created the edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>producer.name</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Name of the <a>producer</a> of the edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>producer.ucpc</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p><a>UCPC</a> for the <a>producer</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>producer.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the <a>producer</a> in the Cannabis Reports API.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>type</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Type of cannabis edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strain</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p><a>Strain</a> that was used in this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strain.name</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Name of the <a>strain</a> used in this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strain.ucpc</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p><a>UCPC</a> of the <a>strain</a> used in this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strain.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the <a>strain</a> used in this edible in the Cannabis Reports API.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>labTest</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the PDF containing lab test information for this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>thc</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Milligrams of <a>THC</a> in this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>cbd</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Milligrams of <a>CBD</a> in this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>cannabis</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Milligrams of cannabis in this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>hashOil</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Milligrams of hash oil in this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>reviews</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing information on the reviews for the edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>reviews.count</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>integer</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Number of reviews for the edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>reviews.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the reviews for the edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>createdAt</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing two strings, "dateTime" and the "timezone" when the edible was added.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>updatedAt</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing two strings, "dateTime" and the "timezone" when the edible was updated.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>

### Explore Edible Endpoints

<hr>

<small>Here are some of the results available from the different edible
endpoints:</small>

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
          <p><a>/edibles</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of edibles with optional sorting.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/edibles/type/:edibleType</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of edibles for a given type with optional sorting.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/edibles/:ucpc</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets an individual edible based on the UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/edibles/:ucpc/reviews</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Get the reviews for a cannabis edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/edibles/:ucpc/effectsFlavors</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Get the average effects and flavors from reviews for this edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/edibles/:ucpc/producer</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the producer for a given edible.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/edibles/:ucpc/strain</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the information about a strain for an edible with the given UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/edibles/:ucpc/availability/geo/:lat/:lng/:radius</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Get information about the availability of an edible using latitude and longitude.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>
