### Seed Company Object

<small>Seed Companies in the Cannabis Reports system.</small>

<hr>

Cannabis seed companies create the variety of strains available for growing and
breeding.

### Seed Company Attributes

<hr>

<table class="table table-bordered table-hover">
  <tbody>
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
          <p>Name of the cannabis seed company.</p>
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
          <p><a>UCPC</a> code for this seed company.</p>
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
          <p>Link to the seed company in the Cannabis Reports API.</p>
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
          <p>Link to the QR code for this seed company.</p>
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
          <p>'url'</p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the seed company on the Cannabis Reports website.</p>
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
          <p>Link to the full size image for this seed company on Cannabis
          Reports.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>lineage</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Countries of origin for the genetics of the <a>strains</a>
          available from this seed company. Object keys are the country name and the
          values are two character country codes.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strains</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing information on the <a>strains</a> available
          from this seed company.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strains.count</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>integer</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Number of <a>strains</a> available from this seed
          company.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strains.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the <a>strains</a> available from this seed
          company.</p>
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
          <p>Object containing information on the reviews for all of the
          <a>strains</a> available from this seed company.</p>
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
          <p>The number of reviews for all of the <a>strains</a> available
          from this seed company.</p>
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
          <p>Links to the reviews for all of the <a>strains</a> available
          from this seed company.</p>
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
          <p>Object containing two strings, "dateTime" and the "timezone"
          when the seed company was added.</p>
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
          <p>Object containing two strings, "dateTime" and the "timezone"
          when the seed company was updated.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>

### Explore Seed Company Endpoints

<hr>

Here are some of the results available from the different seed company
endpoints:

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
          <p><a>/seed-companies/:ucpc</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets an individual seed company based on the UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/seed-companies/:ucpc/strains</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the information about the strains offered by the seed company.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/seed-companies/:ucpc/reviews</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the reviews for the strains available from the seed company.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>
