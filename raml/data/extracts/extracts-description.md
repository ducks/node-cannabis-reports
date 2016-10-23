### Extract Object

<small>Cannabis extracts in the Cannabis Reports system.</small>

<hr>

Cannabis extracts are created from the flowers of the cannabis plant.
Various methods for creating cannabis extracts have been perfected over
thousands of years.

Cannabis Reports recognizes 10 main types of extracts:

- Kief
- Hash
- Water-Hash
- Oil
- Wax
- Crumble
- Honeycomb
- Shatter
- Vaporizer-Disposable
- Vaporizer-Cartridge

Each extract is tied to a strain and the producer who created it. For more
information about cannabis extracts, check out our FAQ here:

https://www.cannabisreports.com/faq/typesconsumption/what-is-a-cannabis-extract

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
          <p>Name of the extract including the name of the <a>strain</a> and the type of extract.</p>
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
          <p><a>UCPC</a> code for this extract.</p>
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
          <p>Link to the extract in the Cannabis Reports API.</p>
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
          <p>Link to the QR code for this extract.</p>
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
          <p>Link to the barcode for this extract.</p>
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
          <p>Link to the extract listing on the Cannabis Reports website.</p>
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
          <p>Link to the full size image for this extract. If none has been uploaded, this links to a generic image for this type of extract.</p>
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
          <p>Information about the <a>producer</a> that created the extract.</p>
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
          <p>Name of the <a>producer</a> of the extract.</p>
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
          <p>Type of cannabis extract.</p>
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
          <p><a>Strain</a> that this extract comes from.</p>
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
          <p>Name of the <a>strain</a> this extract comes from.</p>
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
          <p><a>UCPC</a> of the <a>strain</a> this extract comes from.</p>
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
          <p>Link to the <a>strain</a> this extract comes from in the Cannabis Reports API.</p>
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
          <p>Link to the PDF containing lab test information for this extract.</p>
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
          <p>Percentage of <a>THC</a> in this extract.</p>
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
          <p>Percentage of <a>CBD</a> in this extract.</p>
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
          <p>Object containing information on the reviews for the extract.</p>
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
          <p>Number of reviews for the extract.</p>
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
          <p>Link to the reviews for the extract.</p>
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
          <p>Object containing two strings, "dateTime" and the "timezone" when the extract was added.</p>
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
          <p>Object containing two strings, "dateTime" and the "timezone" when the extract was updated.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>

### Explore Extract Endpoints

<hr>

<small>Here are some of the results available from the different extract
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
          <p><a>/extracts</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of extracts with optional sorting.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/extracts/type/:extractType</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of extracts with optional sorting.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/extracts/:ucpc</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets an individual extract based on the UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/extracts/:ucpc/reviews</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Get the reviews for a cannabis extract.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/extracts/:ucpc/effectsFlavors</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Get the average effects and flavors from reviews for this extract.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/extracts/:ucpc/producer</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the producer for a given extract.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/extracts/:ucpc/strain</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the information about a strain for an extract with the given UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/extracts/:ucpc/availability/geo/:lat/:lng/:radius</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Get information about the availability of an extract using latitude and longitude.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>
