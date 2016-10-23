### Flower object

<small>Cannabis flowers in the Cannabis Reports system.</small>

<hr>

Cannabis flowers are distinct products that can be found on retailer menus.
The Cannabis Reports system allows for specific batches of cannabis flowers
to be linked directly to the cultivator that grew the plant, while still
maintaining a connection to the original genetics of the strain. Designating
flowers as distinct items improves our ability to discuss the variety of
flower quality that can be produced from the same strain grown at different
farms.

The main forms of flowers that Cannabis Reports recognizes are:

- Flowers
- Seeds
- Clones
- Shake

Producers measure the cannabinoid content of their flowers in many ways.
Currently, Cannabis Reports allows producers to display the percentage of
weight for THC and CBD.

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
          <p>Name of the flower.</p>
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
          <p><a>UCPC</a> code for this flower.</p>
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
          <p>Link to the flower in the Cannabis Reports API.</p>
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
          <p>Link to the QR code for this flower.</p>
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
          <p>Link to the barcode for this flower.</p>
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
          <p>Link to the flower listing on the Cannabis Reports website.</p>
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
          <p>Link to the full size image for this flower.</p>
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
          <p>Information about the <a>producer</a> that created the
          flower.</p>
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
          <p>Name of the <a>producer</a> of the flower.</p>
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
          <p>Type of cannabis flower.</p>
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
          <p><a>Strain</a> that was used for this flower.</p>
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
          <p>Name of the <a>strain</a> used for this flower.</p>
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
          <p><a>UCPC</a> of the <a>strain</a> used for this flower.</p>
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
          <p>Link to the <a>strain</a> used in this flower in the Cannabis
          Reports API.</p>
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
          <p>Link to the PDF containing lab test information for this
          flower.</p>
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
          <p>Percentage of <a>THC</a> in this flower.</p>
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
          <p>Percentage of <a>CBD</a> in this flower.</p>
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
          <p>Object containing information on the reviews for the
          flower.</p>
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
          <p>Number of reviews for the flower.</p>
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
          <p>Link to the reviews for the flower.</p>
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
          when the flower was added.</p>
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
          when the flower was updated.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>

### Explore Flowers Endpoints
<hr>
<small>Here are some of the results available from the different flower
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
          <p><a>/flowers</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of flowers with optional sorting.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/flowers/type/:flowerType</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of products for a given type with optional sorting.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/flowers/:ucpc</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets an individual flower based on the UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/flowers/:ucpc/reviews</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the reviews for a cannabis flower.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/flowers/:ucpc/effectsFlavors</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the average effects and flavors from reviews for this flower.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/flowers/:ucpc/producer</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the producer for a given flower.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/flowers/:ucpc/strain</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the information about a strain for a flower with the given UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/flowers/:ucpc/availability/geo/:lat/:lng/:radius</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Get information about the availability of a flower using latitude and longitude.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>
