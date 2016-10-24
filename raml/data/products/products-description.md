### Product Object

<small>Cannabis products in the Cannabis Reports system.</small>

<hr>

Cannabis products cover a wide variety of additional products that contain cannabis. Anything that wouldn't be consumed like an edible or extract falls into this category. We also have pre-rolled cannabis in this category.

The main forms of products that Cannabis Reports recognizes are:

- Bath
- Topical
- Skin Care
- Pre-Roll

We also support "Other" types of products. Some examples are:

- Lip Balm
- Massage Oil
- Personal Lubricant

Producers measure the amount of cannabis in their products in a variety of
ways. We recognize 4 ways for measuring the cannabis contents:

- THC mg
- CBD mg
- Cannabis mg
- Hash Oil mg

More information about cannabis products can be found in our FAQ here:

https://www.cannabisreports.com/faq/typesconsumption/what-is-a-cannabis-product

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
          <p>Name of the product.</p>
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
          <p><a>UCPC</a> code for this product.</p>
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
          <p>Link to the product in the Cannabis Reports API.</p>
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
          <p>Link to the QR code for this product.</p>
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
          <p>Link to the barcode for this product.</p>
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
          <p>Link to the product listing on the Cannabis Reports website.</p>
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
          <p>Link to the full size image for this product.</p>
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
          <p>Information about the <a>producer</a> that created the product.</p>
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
          <p>Name of the <a>producer</a> of the product.</p>
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
          <p>Type of cannabis product.</p>
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
          <p><a>Strain</a> that was used in this product.</p>
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
          <p>Name of the <a>strain</a> used in this product.</p>
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
          <p><a>UCPC</a> of the <a>strain</a> used in this product.</p>
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
          <p>Link to the <a>strain</a> used in this product in the Cannabis Reports API.</p>
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
          <p>Link to the PDF containing lab test information for this product.</p>
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
          <p>Milligrams of <a>THC</a> in this product.</p>
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
          <p>Milligrams of <a>CBD</a> in this product.</p>
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
          <p>Milligrams of cannabis in this product.</p>
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
          <p>Milligrams of hash oil in this product.</p>
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
          <p>Object containing information on the reviews for the product.</p>
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
          <p>Number of reviews for the product.</p>
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
          <p>Link to the reviews for the product.</p>
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
          <p>Object containing two strings, "dateTime" and the "timezone" when the product was added.</p>
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
          <p>Object containing two strings, "dateTime" and the "timezone" when the product was updated.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>

### Explore Product Endpoints

<hr>

<small>Here are some of the results available from the different product
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
          <p><a>/products</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of products with optional sorting.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/products/type/:productType</a></p>
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
          <p><a>/products/:ucpc</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets an individual product based on the UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/products/:ucpc/reviews</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the reviews for a cannabis product.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/products/:ucpc/effectsFlavors</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the average effects and flavors from reviews for this product.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/products/:ucpc/producer</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the producer for a given product.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/products/:ucpc/strain</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets the information about a strain for a product with the given UCPC.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/products/:ucpc/availability/geo/:lat/:lng/:radius</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Get information about the availability of a product using latitude and longitude.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>
